import React from "react";
import "./AddNewProduct.css";
import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddNewProduct() {
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
  const [accesssoryConnect, setAccessoryConnect] = useState("");

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const addProduct = () => {
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
            connect: accesssoryConnect,
          };
    axios
      .post("http://localhost/controllers/products.controller.php", {
        action: 4,
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
        // goBack()
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  return (
    <div class="body" style={{ paddingTop: "100px" }}>
      <div class="container" id="container-custom">
        <h5 style={{ textAlign: "center" }}>Thêm sản phẩm mới</h5>
        <div class="add-new-product-form">
          <div class="row mb-3">
            <div class="col-xs-12 col-md-8">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Tên</strong>
              </label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
              />
            </div>
            <div class="col-xs-12 col-md-4">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Giá tiền</strong>
              </label>
              <input
                class="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
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
              />
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
              />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <label for="formFile" class="form-label">
                      <strong>Kết nối</strong>
                    </label>
                    <input
                      class="form-control"
                      value={accesssoryConnect}
                      onChange={(e) => setAccessoryConnect(e.target.value)}
                    />
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
              onClick={addProduct}
              type="button"
              class="btn btn-primary"
              style={{ width: "120px", height: "45px", alignSelf: "center" }}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
