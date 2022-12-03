import React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditProductDetail() {
  const location = useLocation();

  const [name, setName] = useState("");
  const [type, setType] = useState("1");
  const [imgURL, setImgURL] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [warranty, setWarranty] = useState("");
  const [description, setDescription] = useState("");

  // Laptop specifications
  const [laptopSeries, setLaptopSeries] = useState("");
  const [laptopPartNum, setLaptopPartNum] = useState("");
  const [laptopColor, setLaptopColor] = useState("");
  const [laptopDemand, setLaptopDemand] = useState("");
  const [laptopCpuGen, setLaptopCpuGen] = useState("");
  const [laptopCpu, setLaptopCpu] = useState("");
  const [laptopGpu, setLaptopGpu] = useState("");
  const [laptopRam, setLaptopRam] = useState("");
  const [laptopScreen, setLaptopScreen] = useState("");
  const [laptopStorage, setLaptopStorage] = useState("");
  const [laptopKeyboard, setLaptopKeyboard] = useState("");
  const [laptopOS, setLaptopOS] = useState("");
  const [laptopPin, setLaptopPin] = useState("");
  const [laptopWeight, setLaptopWeight] = useState("");

  // PC specifications
  const [pcPartNum, setPcPartNum] = useState("");
  const [pcColor, setPcColor] = useState("");
  const [pcCpuSeries, setPcCpuSeries] = useState("");
  const [pcCpuGen, setPcCpuGen] = useState("");
  const [pcCpu, setPcCpu] = useState("");
  const [pcGpu, setPcGpu] = useState("");
  const [pcRam, setPcRam] = useState("");
  const [pcStorage, setPcStorage] = useState("");
  const [pcOS, setPcOS] = useState("");

  // Phone specifications
  const [phoneSeries, setPhoneSeries] = useState("");
  const [phoneColor, setPhoneColor] = useState("");
  const [phoneScreen, setPhoneScreen] = useState("");
  const [phoneRom, setPhoneRom] = useState("");
  const [phoneOS, setPhoneOS] = useState("");
  const [phoneRam, setPhoneRam] = useState("");
  const [phonePin, setPhonePin] = useState("");
  const [phoneFrontCam, setPhoneFrontCam] = useState("");
  const [phoneBackCam, setPhoneBackCam] = useState("");
  const [phoneWeight, setPhoneWeight] = useState("");

  // Accessory specifications
  const [accessoryDemand, setAccessoryDemand] = useState("");
  const [accessoryColor, setAccessoryColor] = useState("");
  const [accessoryType, setAccessoryType] = useState("");
  const [accessoryConnect, setAccessoryConnect] = useState("");

  const [valName, setValName] = useState(true);
  const [valImgURL, setValImgURL] = useState(true);
  const [valPrice, setValPrice] = useState(true);
  const [valBrand, setValBrand] = useState(true);
  const [valWarranty, setValWarranty] = useState(true);

  const [valLapSeries, setValLapSeries] = useState(true);
  const [valLapPartNum, setValLapPartNum] = useState(true);
  const [valLapColor, setValLapColor] = useState(true);
  const [valLapDemand, setValLapDemand] = useState(true);
  const [valLapCpuGen, setValLapCpuGen] = useState(true);
  const [valLapCpu, setValLapCpu] = useState(true);
  const [valLapGpu, setValLapGpu] = useState(true);
  const [valLapRam, setValLapRam] = useState(true);
  const [valLapScreen, setValLapScreen] = useState(true);
  const [valLapStorage, setValLapStorage] = useState(true);
  const [valLapKeyboard, setValLapKeyboard] = useState(true);
  const [valLapOS, setValLapOS] = useState(true);
  const [valLapPin, setValLapPin] = useState(true);
  const [valLapWeight, setValLapWeight] = useState(true);

  const [valPcPartNum, setValPcPartNum] = useState(true);
  const [valPcColor, setValPcColor] = useState(true);
  const [valPcCpuSeries, setValPcCpuSeries] = useState(true);
  const [valPcCpuGen, setValPcCpuGen] = useState(true);
  const [valPcCpu, setValPcCpu] = useState(true);
  const [valPcGpu, setValPcGpu] = useState(true);
  const [valPcRam, setValPcRam] = useState(true);
  const [valPcStorage, setValPcStorage] = useState(true);
  const [valPcOS, setValPcOS] = useState(true);

  const [valPhoneSeries, setValPhoneSeries] = useState(true);
  const [valPhoneColor, setValPhoneColor] = useState(true);
  const [valPhoneScreen, setValPhoneScreen] = useState(true);
  const [valPhoneRom, setValPhoneRom] = useState(true);
  const [valPhoneOS, setValPhoneOS] = useState(true);
  const [valPhoneRam, setValPhoneRam] = useState(true);
  const [valPhonePin, setValPhonePin] = useState(true);
  const [valPhoneFrontCam, setValPhoneFrontCam] = useState(true);
  const [valPhoneBackCam, setValPhoneBackCam] = useState(true);
  const [valPhoneWeight, setValPhoneWeight] = useState(true);

  const [valAccessoryDemand, setValAccessoryDemand] = useState(true);
  const [valAccessoryColor, setValAccessoryColor] = useState(true);
  const [valAccessoryType, setValAccessoryType] = useState(true);
  const [valAccessoryConnect, setValAccessoryConnect] = useState(true);

  const nameRef = useRef(null)
  const imgURLRef = useRef(null)
  const priceRef = useRef(null)
  const brandRef = useRef(null)
  const warrantyRef = useRef(null)

  const lapSeriesRef = useRef(null)
  const lapPartNumRef = useRef(null)
  const lapColorRef = useRef(null)
  const lapDemandRef = useRef(null)
  const lapCpuGenRef = useRef(null)
  const lapCpuRef = useRef(null)
  const lapGpuRef = useRef(null)
  const lapRamRef = useRef(null)
  const lapScreenRef = useRef(null)
  const lapStorageRef = useRef(null)
  const lapKeyboardRef = useRef(null)
  const lapOSRef = useRef(null)
  const lapPinRef = useRef(null)
  const lapWeightRef = useRef(null)

  const pcPartNumRef = useRef(null);
  const pcColorRef = useRef(null);
  const pcCpuSeriesRef = useRef(null);
  const pcCpuGenRef = useRef(null);
  const pcCpuRef = useRef(null);
  const pcGpuRef = useRef(null);
  const pcRamRef = useRef(null);
  const pcStorageRef = useRef(null);
  const pcOSRef = useRef(null);

  const phoneSeriesRef = useRef(null);
  const phoneColorRef = useRef(null);
  const phoneScreenRef = useRef(null);
  const phoneRomRef = useRef(null);
  const phoneOSRef = useRef(null);
  const phoneRamRef = useRef(null);
  const phonePinRef = useRef(null);
  const phoneFrontCamRef = useRef(null);
  const phoneBackCamRef = useRef(null);
  const phoneWeightRef = useRef(null);

  const accessoryDemandRef = useRef(null);
  const accessoryColorRef = useRef(null);
  const accessoryTypeRef = useRef(null);
  const accessoryConnectRef = useRef(null);

  const handleSubmit = () => {

    let validated = true

    if (name !== "") {
      setValName(true)
    } else {
      validated = false;
      setValName(false)
      nameRef.current.focus()
    }
    if (imgURL !== "") {
      setValImgURL(true)
    } else {
      validated = false;
      setValImgURL(false)
      imgURLRef.current.focus()
    }
    if (price !== "") {
      setValPrice(true)
    } else {
      validated = false;
      setValPrice(false)
      priceRef.current.focus()
    }
    if (brand !== "") {
      setValBrand(true)
    } else {
      validated = false;
      setValBrand(false)
      brandRef.current.focus()
    }
    if (warranty !== "") {
      setValWarranty(true)
    } else {
      validated = false;
      setValWarranty(false)
      warrantyRef.current.focus()
    }

    if (type == 1) {
      if (laptopSeries !== "") {
        setValLapSeries(true)
      } else {
        validated = false;
        setValLapSeries(false)
        lapSeriesRef.current.focus()
      }
      if (laptopPartNum !== "") {
        setValLapPartNum(true)
      } else {
        validated = false;
        setValLapPartNum(false)
        lapPartNumRef.current.focus()
      }
      if (laptopColor !== "") {
        setValLapColor(true)
      } else {
        validated = false;
        setValLapColor(false)
        lapColorRef.current.focus()
      }
      if (laptopDemand !== "") {
        setValLapDemand(true)
      } else {
        validated = false;
        setValLapDemand(false)
        lapDemandRef.current.focus()
      }
      if (laptopCpuGen !== "") {
        setValLapCpuGen(true)
      } else {
        validated = false;
        setValLapCpuGen(false)
        lapCpuGenRef.current.focus()
      }
      if (laptopCpu !== "") {
        setValLapCpu(true)
      } else {
        validated = false;
        setValLapCpu(false)
        lapCpuRef.current.focus()
      }
      if (laptopGpu !== "") {
        setValLapGpu(true)
      } else {
        validated = false;
        setValLapGpu(false)
        lapGpuRef.current.focus()
      }
      if (laptopRam !== "") {
        setValLapRam(true)
      } else {
        validated = false;
        setValLapRam(false)
        lapRamRef.current.focus()
      }
      if (laptopScreen !== "") {
        setValLapScreen(true)
      } else {
        validated = false;
        setValLapScreen(false)
        lapScreenRef.current.focus()
      }
      if (laptopStorage !== "") {
        setValLapStorage(true)
      } else {
        validated = false;
        setValLapStorage(false)
        lapStorageRef.current.focus()
      }
      if (laptopKeyboard !== "") {
        setValLapKeyboard(true)
      } else {
        validated = false;
        setValLapKeyboard(false)
        lapKeyboardRef.current.focus()
      }
      if (laptopOS !== "") {
        setValLapOS(true)
      } else {
        validated = false;
        setValLapOS(false)
        lapOSRef.current.focus()
      }
      if (laptopPin !== "") {
        setValLapPin(true)
      } else {
        validated = false;
        setValLapPin(false)
        lapPinRef.current.focus()
      }
      if (laptopWeight !== "") {
        setValLapWeight(true)
      } else {
        validated = false;
        setValLapWeight(false)
        lapWeightRef.current.focus()
      }
    } else if (type == 2) {
      if (pcPartNum !== "") {
        setValPcPartNum(true)
      } else {
        validated = false;
        setValPcPartNum(false)
        pcPartNumRef.current.focus()
      }
      if (pcColor !== "") {
        setValPcColor(true)
      } else {
        validated = false;
        setValPcColor(false)
        pcColorRef.current.focus()
      }
      if (pcCpuSeries !== "") {
        setValPcCpuSeries(true)
      } else {
        validated = false;
        setValPcCpuSeries(false)
        pcCpuSeriesRef.current.focus()
      }
      if (pcCpuGen !== "") {
        setValPcCpuGen(true)
      } else {
        validated = false;
        setValPcCpuGen(false)
        pcCpuGenRef.current.focus()
      }
      if (pcCpu !== "") {
        setValPcCpu(true)
      } else {
        validated = false;
        setValPcCpu(false)
        pcCpuRef.current.focus()
      }
      if (pcGpu !== "") {
        setValPcGpu(true)
      } else {
        validated = false;
        setValPcGpu(false)
        pcGpuRef.current.focus()
      }
      if (pcRam !== "") {
        setValPcRam(true)
      } else {
        validated = false;
        setValPcRam(false)
        pcRamRef.current.focus()
      }
      if (pcStorage !== "") {
        setValPcStorage(true)
      } else {
        validated = false;
        setValPcStorage(false)
        pcStorageRef.current.focus()
      }
      if (pcOS !== "") {
        setValPcOS(true)
      } else {
        validated = false;
        setValPcOS(false)
        pcOSRef.current.focus()
      }

    } else if (type == 3) {
      if (phoneSeries !== "") {
        setValPhoneSeries(true)
      } else {
        validated = false;
        setValPhoneSeries(false)
        phoneSeriesRef.current.focus()
      }
      if (phoneColor !== "") {
        setValPhoneColor(true)
      } else {
        validated = false;
        setValPhoneColor(false)
        phoneColorRef.current.focus()
      }
      if (phoneScreen !== "") {
        setValPhoneScreen(true)
      } else {
        validated = false;
        setValPhoneScreen(false)
        phoneScreenRef.current.focus()
      }
      if (phoneRom !== "") {
        setValPhoneRom(true)
      } else {
        validated = false;
        setValPhoneRom(false)
        phoneRomRef.current.focus()
      }
      if (phoneOS !== "") {
        setValPhoneOS(true)
      } else {
        validated = false;
        setValPhoneOS(false)
        phoneOSRef.current.focus()
      }
      if (phoneRam !== "") {
        setValPhoneRam(true)
      } else {
        validated = false;
        setValPhoneRam(false)
        phoneRamRef.current.focus()
      }
      if (phonePin !== "") {
        setValPhonePin(true)
      } else {
        validated = false;
        setValPhonePin(false)
        phonePinRef.current.focus()
      }
      if (phoneFrontCam !== "") {
        setValPhoneFrontCam(true)
      } else {
        validated = false;
        setValPhoneFrontCam(false)
        phoneFrontCamRef.current.focus()
      }
      if (phoneBackCam !== "") {
        setValPhoneBackCam(true)
      } else {
        validated = false;
        setValPhoneBackCam(false)
        phoneBackCamRef.current.focus()
      }
      if (phoneWeight !== "") {
        setValPhoneWeight(true)
      } else {
        validated = false;
        setValPhoneWeight(false)
        phoneWeightRef.current.focus()
      }
    } else {
      if (accessoryDemand !== "") {
        setValAccessoryDemand(true)
      } else {
        validated = false;
        setValAccessoryDemand(false)
        accessoryDemandRef.current.focus()
      }
      if (accessoryColor !== "") {
        setValAccessoryColor(true)
      } else {
        validated = false;
        setValAccessoryColor(false)
        accessoryColorRef.current.focus()
      }
      if (accessoryType !== "") {
        setValAccessoryType(true)
      } else {
        validated = false;
        setValAccessoryType(false)
        accessoryTypeRef.current.focus()
      }
      if (accessoryConnect !== "") {
        setValAccessoryConnect(true)
      } else {
        validated = false;
        setValAccessoryConnect(false)
        accessoryConnectRef.current.focus()
      }
    }
    if (validated) {
      editProduct()
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost/controllers/products.controller.php", {
        params: {
          action: 1,
          id: location.state.id,
        },
      }) //url to see news.php
      .then((res) => {
        // console.log(JSON.parse(res.data[0].attribute))
        let product = res.data[0];
        let specifications = JSON.parse(product.attribute);
        setName(product.name);
        setType(product.type);
        setImgURL(product.image);
        setPrice(product.price);
        setBrand(product.brand);
        setWarranty(product.warranty);
        setDescription(product.description);
        if (product.type == 1) {
          setLaptopSeries(specifications.series);
          setLaptopPartNum(specifications.partnum);
          setLaptopColor(specifications.color);
          setLaptopDemand(specifications.demand);
          setLaptopCpuGen(specifications.cpugen);
          setLaptopCpu(specifications.cpu);
          setLaptopGpu(specifications.gpu);
          setLaptopRam(specifications.ram);
          setLaptopScreen(specifications.screen);
          setLaptopStorage(specifications.storage);
          setLaptopKeyboard(specifications.keyboard);
          setLaptopOS(specifications.os);
          setLaptopPin(specifications.pin);
          setLaptopWeight(specifications.weight);
        } else if (product.type == 2) {
          setPcPartNum(specifications.partnum);
          setPcColor(specifications.color);
          setPcCpuSeries(specifications.cpuseries);
          setPcCpuGen(specifications.cpugen);
          setPcCpu(specifications.cpu);
          setPcGpu(specifications.gpu);
          setPcRam(specifications.ram);
          setPcStorage(specifications.storage);
          setPcOS(specifications.os);
        } else if (product.type == 3) {
          setPhoneSeries(specifications.series);
          setPhoneColor(specifications.color);
          setPhoneScreen(specifications.screen);
          setPhoneRom(specifications.rom);
          setPhoneOS(specifications.os);
          setPhoneRam(specifications.ram);
          setPhoneFrontCam(specifications.frontcam);
          setPhoneBackCam(specifications.backcam);
          setPhonePin(specifications.pin);
          setPhoneWeight(specifications.weight);
        } else {
          setAccessoryDemand(specifications.demand);
          setAccessoryColor(specifications.color);
          setAccessoryType(specifications.type);
          setAccessoryConnect(specifications.connect);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const editProduct = () => {
    let attr =
      type == 1
        ? {
          series: laptopSeries,
          partnum: laptopPartNum,
          color: laptopColor,
          demand: laptopDemand,
          cpugen: laptopCpuGen,
          cpu: laptopCpu,
          gpu: laptopGpu,
          ram: laptopRam,
          screen: laptopScreen,
          storage: laptopStorage,
          keyboard: laptopKeyboard,
          os: laptopOS,
          pin: laptopPin,
          weight: laptopWeight,
        }
        : type == 2
          ? {
            partnum: pcPartNum,
            color: pcColor,
            cpuseries: pcCpuSeries,
            cpugen: pcCpuGen,
            cpu: pcCpu,
            gpu: pcGpu,
            ram: pcRam,
            storage: pcStorage,
            os: pcOS,
          }
          : type == 3
            ? {
              series: phoneSeries,
              color: phoneColor,
              screen: phoneScreen,
              rom: phoneRom,
              os: phoneOS,
              ram: phoneRam,
              pin: phonePin,
              frontcam: phoneFrontCam,
              backcam: phoneBackCam,
              weight: phoneWeight,
            }
            : {
              demand: accessoryDemand,
              color: accessoryColor,
              type: accessoryType,
              connect: accessoryConnect,
            };
    axios
      .post("http://localhost/controllers/products.controller.php", {
        action: 3,
        id: location.state.id,
        brand: brand,
        warranty: warranty,
        price: price,
        name: name,
        description: description,
        thumbnail: imgURL,
        type: type,
        attribute: JSON.stringify(attr),
      })
      .then((res) => {
        alert(res.data);
        goBack()
      })
      .catch((err) => {
        alert(err.data);
      });
  };
  return (
    <div class="body" style={{ paddingTop: "100px" }}>
      <div class="container" id="container-custom">
        <h5 style={{ textAlign: "center" }}>Thêm sản phẩm mới</h5>
        <form class="add-new-product-form" noValidate>
          <div class="row mb-3">
            <div class="col-xs-12 col-md-8">
              <label for="validateName" class="form-label">
                <strong>Tên</strong>
              </label>
              <input
                class="form-control"
                id="validateName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={nameRef}
              />
              {
                valName ? <></> : <p id="error-input">Không được để trống</p>
              }
            </div>
            <div class="col-xs-12 col-md-4">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Phân loại</strong>
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="1">Laptop</option>
                <option value="2">PC</option>
                <option value="3">Điện thoại</option>
                <option value="4">Phụ kiện</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-xs-12 col-md-8">
              <label for="formFile" class="form-label">
                <strong>URL hình ảnh</strong>
              </label>
              <input
                class="form-control"
                value={imgURL}
                onChange={(e) => setImgURL(e.target.value)}
                ref={imgURLRef}
              />
              {
                valImgURL ? <></> : <p id="error-input">Không được để trống</p>
              }
            </div>
            <div class="col-xs-12 col-md-4">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Giá tiền</strong>
              </label>
              <input
                class="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                ref={priceRef}
              />
              {
                valPrice ? <></> : <p id="error-input">Không được để trống</p>
              }
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-xs-12 col-md-8">
              <label for="formFile" class="form-label">
                <strong>Thương hiệu</strong>
              </label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                ref={brandRef}
              />
              {
                valBrand ? <></> : <p id="error-input">Không được để trống</p>
              }
            </div>
            <div class="col-xs-12 col-md-4">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Bảo hành</strong>
              </label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                value={warranty}
                onChange={(e) => setWarranty(e.target.value)}
                ref={warrantyRef}
              />
              {
                valWarranty ? <></> : <p id="error-input">Không được để trống</p>
              }
            </div>
          </div>
          {
            // Laptop form
            type == 1 ? (
              <>
                <div class="row mb-3">
                  <div class="col-xs-12 col-md-6">
                    <label for="formFile" class="form-label">
                      <strong>Series laptop</strong>
                    </label>
                    <input
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={laptopSeries}
                      onChange={(e) => setLaptopSeries(e.target.value)}
                      ref={lapSeriesRef}
                    />
                    {
                      valLapSeries ? <></> : <p id="error-input">Không được để trống</p>
                    }
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <label for="exampleFormControlInput1" class="form-label">
                      <strong>Part-number</strong>
                    </label>
                    <input
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={laptopPartNum}
                      onChange={(e) => setLaptopPartNum(e.target.value)}
                      ref={lapPartNumRef}
                    />
                    {
                      valLapPartNum ? <></> : <p id="error-input">Không được để trống</p>
                    }
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-xs-12 col-md-6">
                    <label for="exampleFormControlInput1" class="form-label">
                      <strong>Màu sắc</strong>
                    </label>
                    <input
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={laptopColor}
                      onChange={(e) => setLaptopColor(e.target.value)}
                      ref={lapColorRef}
                    />
                    {
                      valLapColor ? <></> : <p id="error-input">Không được để trống</p>
                    }
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <label for="formFile" class="form-label">
                      <strong>Nhu cầu</strong>
                    </label>
                    <input
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={laptopDemand}
                      onChange={(e) => setLaptopDemand(e.target.value)}
                      ref={lapDemandRef}
                    />
                    {
                      valLapDemand ? <></> : <p id="error-input">Không được để trống</p>
                    }
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-xs-12 col-md-6">
                    <label for="exampleFormControlInput1" class="form-label">
                      <strong>Thế hệ CPU</strong>
                    </label>
                    <input
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={laptopCpuGen}
                      onChange={(e) => setLaptopCpuGen(e.target.value)}
                      ref={lapCpuGenRef}
                    />
                    {
                      valLapCpuGen ? <></> : <p id="error-input">Không được để trống</p>
                    }
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <label for="formFile" class="form-label">
                      <strong>CPU</strong>
                    </label>
                    <input
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={laptopCpu}
                      onChange={(e) => setLaptopCpu(e.target.value)}
                      ref={lapCpuRef}
                    />
                    {
                      valLapCpu ? <></> : <p id="error-input">Không được để trống</p>
                    }
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-xs-12 col-md-6">
                    <label for="exampleFormControlInput1" class="form-label">
                      <strong>Chip đồ họa</strong>
                    </label>
                    <input
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={laptopGpu}
                      onChange={(e) => setLaptopGpu(e.target.value)}
                      ref={lapGpuRef}
                    />
                    {
                      valLapGpu ? <></> : <p id="error-input">Không được để trống</p>
                    }
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <label for="formFile" class="form-label">
                      <strong>RAM</strong>
                    </label>
                    <input
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={laptopRam}
                      onChange={(e) => setLaptopRam(e.target.value)}
                      ref={lapRamRef}
                    />
                    {
                      valLapRam ? <></> : <p id="error-input">Không được để trống</p>
                    }
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-xs-12 col-md-6">
                    <label for="exampleFormControlInput1" class="form-label">
                      <strong>Màn hình</strong>
                    </label>
                    <input
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={laptopScreen}
                      onChange={(e) => setLaptopScreen(e.target.value)}
                      ref={lapScreenRef}
                    />
                    {
                      valLapScreen ? <></> : <p id="error-input">Không được để trống</p>
                    }
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <label for="formFile" class="form-label">
                      <strong>Lưu trữ</strong>
                    </label>
                    <input
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={laptopStorage}
                      onChange={(e) => setLaptopStorage(e.target.value)}
                      ref={lapStorageRef}
                    />
                    {
                      valLapStorage ? <></> : <p id="error-input">Không được để trống</p>
                    }
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-xs-12 col-md-6">
                    <label for="exampleFormControlInput1" class="form-label">
                      <strong>Bàn phím</strong>
                    </label>
                    <input
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={laptopKeyboard}
                      onChange={(e) => setLaptopKeyboard(e.target.value)}
                      ref={lapKeyboardRef}
                    />
                    {
                      valLapKeyboard ? <></> : <p id="error-input">Không được để trống</p>
                    }
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <label for="formFile" class="form-label">
                      <strong>Hệ điều hành</strong>
                    </label>
                    <input
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={laptopOS}
                      onChange={(e) => setLaptopOS(e.target.value)}
                      ref={lapOSRef}
                    />
                    {
                      valLapOS ? <></> : <p id="error-input">Không được để trống</p>
                    }
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-xs-12 col-md-6">
                    <label for="exampleFormControlInput1" class="form-label">
                      <strong>Pin</strong>
                    </label>
                    <input
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={laptopPin}
                      onChange={(e) => setLaptopPin(e.target.value)}
                      ref={lapPinRef}
                    />
                    {
                      valLapPin ? <></> : <p id="error-input">Không được để trống</p>
                    }
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <label for="formFile" class="form-label">
                      <strong>Khối lượng</strong>
                    </label>
                    <input
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={laptopWeight}
                      onChange={(e) => setLaptopWeight(e.target.value)}
                      ref={lapWeightRef}
                    />
                    {
                      valLapWeight ? <></> : <p id="error-input">Không được để trống</p>
                    }
                  </div>
                </div>
              </>
            ) : // PC form
              type == 2 ? (
                <>
                  <div class="row mb-3">
                    <div class="col-xs-12 col-md-6">
                      <label for="formFile" class="form-label">
                        <strong>Part-number</strong>
                      </label>
                      <input
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={pcPartNum}
                        onChange={(e) => setPcPartNum(e.target.value)}
                        ref={pcPartNumRef}
                      />
                      {
                        valPcPartNum ? <></> : <p id="error-input">Không được để trống</p>
                      }
                    </div>
                    <div class="col-xs-12 col-md-6">
                      <label for="exampleFormControlInput1" class="form-label">
                        <strong>Màu sắc</strong>
                      </label>
                      <input
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={pcColor}
                        onChange={(e) => setPcColor(e.target.value)}
                        ref={pcColorRef}
                      />
                      {
                        valPcColor ? <></> : <p id="error-input">Không được để trống</p>
                      }
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-xs-12 col-md-6">
                      <label for="exampleFormControlInput1" class="form-label">
                        <strong>Dòng CPU</strong>
                      </label>
                      <input
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={pcCpuSeries}
                        onChange={(e) => setPcCpuSeries(e.target.value)}
                        ref={pcCpuSeriesRef}
                      />
                      {
                        valPcCpuSeries ? <></> : <p id="error-input">Không được để trống</p>
                      }
                    </div>
                    <div class="col-xs-12 col-md-6">
                      <label for="formFile" class="form-label">
                        <strong>Thế hệ CPU</strong>
                      </label>
                      <input
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={pcCpuGen}
                        onChange={(e) => setPcCpuGen(e.target.value)}
                        ref={pcCpuGenRef}
                      />
                      {
                        valPcCpuGen ? <></> : <p id="error-input">Không được để trống</p>
                      }
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-xs-12 col-md-6">
                      <label for="exampleFormControlInput1" class="form-label">
                        <strong>CPU</strong>
                      </label>
                      <input
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={pcCpu}
                        onChange={(e) => setPcCpu(e.target.value)}
                        ref={pcCpuRef}
                      />
                      {
                        valPcCpu ? <></> : <p id="error-input">Không được để trống</p>
                      }
                    </div>
                    <div class="col-xs-12 col-md-6">
                      <label for="formFile" class="form-label">
                        <strong>Chip đồ họa</strong>
                      </label>
                      <input
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={pcGpu}
                        onChange={(e) => setPcGpu(e.target.value)}
                        ref={pcGpuRef}
                      />
                      {
                        valPcGpu ? <></> : <p id="error-input">Không được để trống</p>
                      }
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-xs-12 col-md-6">
                      <label for="exampleFormControlInput1" class="form-label">
                        <strong>RAM</strong>
                      </label>
                      <input
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={pcRam}
                        onChange={(e) => setPcRam(e.target.value)}
                        ref={pcRamRef}
                      />
                      {
                        valPcRam ? <></> : <p id="error-input">Không được để trống</p>
                      }
                    </div>
                    <div class="col-xs-12 col-md-6">
                      <label for="formFile" class="form-label">
                        <strong>Lưu trữ</strong>
                      </label>
                      <input
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={pcStorage}
                        onChange={(e) => setPcStorage(e.target.value)}
                        ref={pcStorageRef}
                      />
                      {
                        valPcStorage ? <></> : <p id="error-input">Không được để trống</p>
                      }
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-xs-12 col-md-6">
                      <label for="exampleFormControlInput1" class="form-label">
                        <strong>Hệ điều hành</strong>
                      </label>
                      <input
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={pcOS}
                        onChange={(e) => setPcOS(e.target.value)}
                        ref={pcOSRef}
                      />
                      {
                        valPcOS ? <></> : <p id="error-input">Không được để trống</p>
                      }
                    </div>
                  </div>
                </>
              ) : // Phone form
                type == 3 ? (
                  <>
                    <div class="row mb-3">
                      <div class="col-xs-12 col-md-6">
                        <label for="formFile" class="form-label">
                          <strong>Series</strong>
                        </label>
                        <input
                          class="form-control"
                          id="exampleFormControlInput1"
                          value={phoneSeries}
                          onChange={(e) => setPhoneSeries(e.target.value)}
                          ref={phoneSeriesRef}
                        />
                        {
                          valPhoneSeries ? <></> : <p id="error-input">Không được để trống</p>
                        }
                      </div>
                      <div class="col-xs-12 col-md-6">
                        <label for="exampleFormControlInput1" class="form-label">
                          <strong>Màu sắc</strong>
                        </label>
                        <input
                          class="form-control"
                          id="exampleFormControlInput1"
                          value={phoneColor}
                          onChange={(e) => setPhoneColor(e.target.value)}
                          ref={phoneColorRef}
                        />
                        {
                          valPhoneColor ? <></> : <p id="error-input">Không được để trống</p>
                        }
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xs-12 col-md-6">
                        <label for="exampleFormControlInput1" class="form-label">
                          <strong>Màn hình</strong>
                        </label>
                        <input
                          class="form-control"
                          id="exampleFormControlInput1"
                          value={phoneScreen}
                          onChange={(e) => setPhoneScreen(e.target.value)}
                          ref={phoneScreenRef}
                        />
                        {
                          valPhoneScreen ? <></> : <p id="error-input">Không được để trống</p>
                        }
                      </div>
                      <div class="col-xs-12 col-md-6">
                        <label for="formFile" class="form-label">
                          <strong>ROM</strong>
                        </label>
                        <input
                          class="form-control"
                          id="exampleFormControlInput1"
                          value={phoneRom}
                          onChange={(e) => setPhoneRom(e.target.value)}
                          ref={phoneRomRef}
                        />
                        {
                          valPhoneRom ? <></> : <p id="error-input">Không được để trống</p>
                        }
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xs-12 col-md-6">
                        <label for="exampleFormControlInput1" class="form-label">
                          <strong>Hệ điều hành</strong>
                        </label>
                        <input
                          class="form-control"
                          id="exampleFormControlInput1"
                          value={phoneOS}
                          onChange={(e) => setPhoneOS(e.target.value)}
                          ref={phoneOSRef}
                        />
                        {
                          valPhoneOS ? <></> : <p id="error-input">Không được để trống</p>
                        }
                      </div>
                      <div class="col-xs-12 col-md-6">
                        <label for="formFile" class="form-label">
                          <strong>RAM</strong>
                        </label>
                        <input
                          class="form-control"
                          id="exampleFormControlInput1"
                          value={phoneRam}
                          onChange={(e) => setPhoneRam(e.target.value)}
                          ref={phoneRamRef}
                        />
                        {
                          valPhoneRam ? <></> : <p id="error-input">Không được để trống</p>
                        }
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xs-12 col-md-6">
                        <label for="exampleFormControlInput1" class="form-label">
                          <strong>Camera trước</strong>
                        </label>
                        <input
                          class="form-control"
                          id="exampleFormControlInput1"
                          value={phoneFrontCam}
                          onChange={(e) => setPhoneFrontCam(e.target.value)}
                          ref={phoneFrontCamRef}
                        />
                        {
                          valPhoneFrontCam ? <></> : <p id="error-input">Không được để trống</p>
                        }
                      </div>
                      <div class="col-xs-12 col-md-6">
                        <label for="formFile" class="form-label">
                          <strong>Camera sau</strong>
                        </label>
                        <input
                          class="form-control"
                          id="exampleFormControlInput1"
                          value={phoneBackCam}
                          onChange={(e) => setPhoneBackCam(e.target.value)}
                          ref={phoneBackCamRef}
                        />
                        {
                          valPhoneBackCam ? <></> : <p id="error-input">Không được để trống</p>
                        }
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xs-12 col-md-6">
                        <label for="exampleFormControlInput1" class="form-label">
                          <strong>Pin</strong>
                        </label>
                        <input
                          class="form-control"
                          id="exampleFormControlInput1"
                          value={phonePin}
                          onChange={(e) => setPhonePin(e.target.value)}
                          ref={phonePinRef}
                        />
                        {
                          valPhonePin ? <></> : <p id="error-input">Không được để trống</p>
                        }
                      </div>
                      <div class="col-xs-12 col-md-6">
                        <label for="exampleFormControlInput1" class="form-label">
                          <strong>Khối lượng</strong>
                        </label>
                        <input
                          class="form-control"
                          id="exampleFormControlInput1"
                          value={phoneWeight}
                          onChange={(e) => setPhoneWeight(e.target.value)}
                          ref={phoneWeightRef}
                        />
                        {
                          valPhoneWeight ? <></> : <p id="error-input">Không được để trống</p>
                        }
                      </div>
                    </div>
                  </>
                ) : (
                  // Accessory form
                  <>
                    <div class="row mb-3">
                      <div class="col-xs-12 col-md-6">
                        <label for="formFile" class="form-label">
                          <strong>Nhu cầu</strong>
                        </label>
                        <input
                          class="form-control"
                          id="exampleFormControlInput1"
                          value={accessoryDemand}
                          onChange={(e) => setAccessoryDemand(e.target.value)}
                          ref={accessoryDemandRef}
                        />
                        {
                          valAccessoryDemand ? <></> : <p id="error-input">Không được để trống</p>
                        }
                      </div>
                      <div class="col-xs-12 col-md-6">
                        <label for="exampleFormControlInput1" class="form-label">
                          <strong>Màu sắc</strong>
                        </label>
                        <input
                          class="form-control"
                          id="exampleFormControlInput1"
                          value={accessoryColor}
                          onChange={(e) => setAccessoryColor(e.target.value)}
                          ref={accessoryColorRef}
                        />
                        {
                          valAccessoryColor ? <></> : <p id="error-input">Không được để trống</p>
                        }
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-xs-12 col-md-6">
                        <label for="exampleFormControlInput1" class="form-label">
                          <strong>Loại phụ kiện</strong>
                        </label>
                        <input
                          class="form-control"
                          id="exampleFormControlInput1"
                          value={accessoryType}
                          onChange={(e) => setAccessoryType(e.target.value)}
                          ref={accessoryTypeRef}
                        />
                        {
                          valAccessoryType ? <></> : <p id="error-input">Không được để trống</p>
                        }
                      </div>
                      <div class="col-xs-12 col-md-6">
                        <label for="formFile" class="form-label">
                          <strong>Kết nối</strong>
                        </label>
                        <input
                          class="form-control"
                          value={accessoryConnect}
                          onChange={(e) => setAccessoryConnect(e.target.value)}
                          ref={accessoryConnectRef}
                        />
                        {
                          valAccessoryConnect ? <></> : <p id="error-input">Không được để trống</p>
                        }
                      </div>
                    </div>
                  </>
                )
          }
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              <strong>Mô tả</strong>
            </label>
            <textarea
              class="form-control shadow-none textarea"
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div class="d-flex justify-content-center">
            <button
              onClick={handleSubmit}
              type="button"
              class="btn btn-primary"
              style={{ width: "120px", height: "45px", alignSelf: "center" }}
            >
              Xác nhận
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
