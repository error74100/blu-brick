import React, { useRef, useState } from 'react';
import '../components/News.css';
import { formatDate } from '../utill/formatDate';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function NewsWrite() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const titleRef = useRef(0);

  const nav = useNavigate();

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

  const saveData = async () => {
    if (!title) {
      alert('제목을 입력하세요.');
      titleRef.current.focus();
      return;
    }

    if (!content) {
      alert('내용을 입력하세요.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/writetodatabase', {
        title: title,
        image: image,
        content: content,
        date: formatDate(),
      });
      alert('저장완료 되었습니다.');
    } catch (error) {
      console.log('error while saving dude: ', error.message);
      alert('저장실패 하였습니다.');
    }
    nav('/news', { replace: true });
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
            onClick={saveData}
            className="btn_basic btn_basic2 big round"
          >
            SAVE
          </button>
        </section>
      </div>
    </main>
  );
}

export default NewsWrite;
