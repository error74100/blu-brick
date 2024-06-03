import React, { useRef, useState } from 'react';
import '../components/News.css';
import { formatDate } from '../utill/formatDate';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function NewsWrite() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleRef = useRef(0);

  const nav = useNavigate();

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

        <div></div>

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
