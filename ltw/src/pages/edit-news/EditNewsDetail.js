import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function EditNewsDetail() {

  const location = useLocation()

  const [title, setTitle] = useState("")
  const [type, setType] = useState("1")
  const [timeUp, setTimeUp] = useState("")
  const [imgURL, setImgURL] = useState("")
  const [content, setContent] = useState("")

  const [valTitle, setValTitle] = useState(true)
  const [valImgURL, setValImgURL] = useState(true)
  const [valContent, setValContent] = useState(true)

  const titleRef = useRef(null)
  const imgURLRef = useRef(null)
  const contentRef = useRef(null)

  const handleSubmit = () => {
    var validated = true
    if (title !== "") {
      setValTitle(true)
    } else {
      validated = false
      setValTitle(false)
      titleRef.current.focus()
    }
    if (imgURL !== "") {
      setValImgURL(true)
    } else {
      validated = false
      setValImgURL(false)
      imgURLRef.current.focus()
    }
    if (content !== "") {
      setValContent(true)
    } else {
      validated = false
      setValContent(false)
      contentRef.current.focus()
    }

    if(validated) {
      editNews()
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost/controllers/news.controller.php", {
        params: {
          action: 1,
          id: location.state.id
        },
      })
      .then((res) => {
        let news = res.data[0]
        setTitle(news.title)
        setType(news.type)
        setImgURL(news.image)
        setTimeUp(news.time_up)
        setContent(news.content)
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);

  const navigate = useNavigate()
  
  const goBack = () => {
    navigate(-1);
  }

  const editNews = () => {
    axios.post("http://localhost/controllers/news.controller.php", {
      action: 3,
      id: parseInt(location.state.id),
      title: title,
      type: type,
      image: imgURL,
      content: content
    }).then((res) => {
      alert(res.data)
      goBack()
      console.log(res.data)
    }).catch((err) => {
      alert(err.data)
    })
  }

  return (
    <div class="body" style={{ paddingTop: '100px' }}>
      <div class="container" id="container-custom">
        <h5 style={{ textAlign: 'center' }}>Ch???nh s???a b??i vi???t</h5>
        <div class="add-new-product-form">
          <div class="row mb-3">
            <div class="col-xs-12 col-md-8">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Ti??u ?????</strong>
              </label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ref={titleRef}
              />
              {
                valTitle ? <></> : <p id="error-input">Kh??ng ???????c ????? tr???ng</p>
              }
            </div>
            <div class="col-xs-12 col-md-4">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Ph??n lo???i</strong>
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="1">Tin c??ng ngh???</option>
                <option value="2">????nh gi?? s???n ph???m</option>
                <option value="3">Th??? thu???t</option>
                <option value="4">Game</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-xs-12 col-md-8">
              <label for="formFile" class="form-label">
                <strong>URL h??nh ???nh</strong>
              </label>
              <input
                class="form-control"
                value={imgURL}
                onChange={(e) => setImgURL(e.target.value)}
                ref={imgURLRef}
              />
              {
                valImgURL ? <></> : <p id="error-input">Kh??ng ???????c ????? tr???ng</p>
              }
            </div>
            <div class="col-xs-12 col-md-4">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Ng??y ????ng</strong>
              </label>
              <input
                class="form-control"
                value={timeUp}
                disabled
                readOnly
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              <strong>N???i dung</strong>
            </label>
            <textarea
              class="form-control shadow-none textarea" rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              ref={contentRef}
            ></textarea >
            {
              valContent ? <></> : <p id="error-input">Kh??ng ???????c ????? tr???ng</p>
            }
          </div>
          <div class="d-flex justify-content-center">
            <button
              onClick={handleSubmit}
              type="button" class="btn btn-primary"
              style={{ width: '120px', height: '45px', alignSelf: 'center' }}
            >X??c nh???n</button>
          </div>
        </div>
      </div>
    </div>
  )
}
