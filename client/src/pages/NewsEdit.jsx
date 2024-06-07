import React, { useEffect, useRef, useState } from 'react';
import '../components/News.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function NewsEdit() {
  const params = useParams();
  const nav = useNavigate();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const titleRef = useRef(0);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/newsDetail', {
        params: {
          id: params.id,
        },
      })
      .then((data) => {
        setTitle(data.data[0].title);
        setImage(data.data[0].image);
        setContent(data.data[0].content);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  const onClickBtn = () => {
    nav('/news');
  };

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = '';
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const fileChangeEvent = (e) => {
    let file = e.target.files[0];

    getBase64(file)
      .then((result) => {
        file['base64'] = result;

        setImage(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickSave = async () => {
    if (!title) {
      alert('제목을 입력하세요.');
      titleRef.current.focus();
      return;
    }

    if (!content) {
      alert('내용을 입력하세요.');
      return;
    }

    if (window.confirm('수정 하시겠습니까?')) {
      axios
        .put(`http://localhost:5000/api/newsUpdate/${params.id}`, {
          title: title,
          image: image,
          content: content,
        })
        .then((data) => {
          alert('수정완료 되었습니다.');
          nav(`/newsdetail/${params.id}`, { replace: true });
          // window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <main>
      <div className="container">
        <section className="menu_tile">NEWS</section>
        <section className="newsdetail_wrap">
          <div className="form_group">
            <label>제목</label>
            <input
              type="text"
              placeholder="제목을 입력하세요."
              value={title}
              ref={titleRef}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label>이미지</label>
            <div className="edit_thumbnail">
              <img src={image} alt="" />
            </div>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              name="image"
              onChange={fileChangeEvent}
            />
          </div>

          <div className="form_group">
            <label>내용</label>
            <CKEditor
              editor={ClassicEditor}
              data={content}
              config={{
                placeholder: '내용을 입력하세요.',
                // extraPlugins: [uploadPlugin],
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
                console.log({ event, editor, data });
              }}
            />
          </div>
        </section>
        <section className="bott_btn news_type">
          <button
            type="button"
            onClick={onClickBtn}
            className="btn_basic btn_basic1 big round"
          >
            LIST
          </button>

          <button
            type="button"
            onClick={onClickSave}
            className="btn_basic btn_basic2 big round"
          >
            SAVE
          </button>
        </section>
      </div>
    </main>
  );
}

export default NewsEdit;
