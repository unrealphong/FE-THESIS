import appstore from "@/assets/images/logo/app_store.svg"
import cod from "@/assets/images/logo/cod.svg"
import logo from "@/assets/images/logo/footer-logo.webp"
import googleplay from "@/assets/images/logo/google_play.svg"
import qrcode from "@/assets/images/logo/qrcode2.svg"
import vnpay from "@/assets/images/logo/vnpay.svg"

function Footer() {
  return (
    <footer className="tw-footer text-black">
      <div className="footer-content container flex space-x-4 justify-center">
        <div className="a flex flex-wrap w-9/12">
          <div className="w-1/4">
            <h3 className="font-bold mb-4">VỀ TOKYOLIFE</h3>
            <ul>
              <li>Chúng tôi là ai</li>
              <li>Cam kết của chúng tôi</li>
              <li>Tin tuyển dụng</li>
              <li>Hệ thống cửa hàng</li>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="font-bold mb-4">HỖ TRỢ KHÁCH HÀNG</h3>
            <ul>
              <li>Hướng dẫn đặt hàng</li>
              <li>Phương thức thanh toán</li>
              <li>Chính sách thành viên</li>
              <li>Chính sách tích - tiêu điểm</li>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="font-bold mb-4">CHÍNH SÁCH</h3>
            <ul>
              <li>Chính sách vận chuyển</li>
              <li>Chính sách đổi trả</li>
              <li>Điều kiện & Điều khoản</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="font-bold mb-4">LIÊN HỆ</h3>
            <div className="text-gray-700 font-medium">
              <h4 className="font-semibold text-black">Hỗ trợ tư vấn mua online:</h4>
              <p>Hotline: 0247 308 2882</p>
              <p>Email: contact@tokyolife.vn</p>
              <p>Giờ làm việc: 8:30 - 22:00 hằng ngày.</p>
            </div>
            <div className="text-gray-700 font-medium">
              <h4 className="font-semibold text-black">
                Hỗ trợ khiếu nại và bảo hành sản phẩm:
              </h4>
              <p>Hotline: 024 7300 6999</p>
              <p>Email: cskh@tokyolife.vn</p>
              <p>Giờ làm việc: 8:30 - 22:00 hằng ngày.</p>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="flex space-x-4">
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="12" fill="black"></rect>
                  <path
                    d="M7.28063 14.3702C7.3783 13.5615 7.70996 13.1088 8.33498 12.6446C9.22927 12.016 10.3464 12.3716 10.3464 12.3716V10.2621C10.6179 10.2552 10.8896 10.2713 11.1582 10.3102V13.0249C11.1582 13.0249 10.0415 12.6693 9.1472 13.2983C8.52252 13.7621 8.19017 14.2152 8.09284 15.0239C8.08979 15.463 8.1722 16.037 8.55169 16.5333C8.45786 16.4852 8.36223 16.4304 8.26478 16.3689C7.42883 15.8075 7.27656 14.9654 7.28063 14.3702ZM15.7708 6.36168C15.1556 5.68756 14.9229 5.00694 14.8388 4.52881H15.6127C15.6127 4.52881 15.4584 5.78247 16.583 7.01533L16.5986 7.0319C16.2955 6.84125 16.0175 6.61622 15.7708 6.36168ZM19.4988 8.27289V10.933C19.4988 10.933 18.5113 10.8943 17.7804 10.7084C16.76 10.4483 16.1041 10.0495 16.1041 10.0495C16.1041 10.0495 15.651 9.76512 15.6144 9.7453V15.2384C15.6144 15.5442 15.5306 16.3081 15.2753 16.9451C14.9419 17.7785 14.4275 18.3256 14.3328 18.4374C14.3328 18.4374 13.7071 19.1768 12.6033 19.6748C11.6083 20.124 10.7347 20.1126 10.4735 20.124C10.4735 20.124 8.96339 20.1838 7.6045 19.3007C7.31064 19.106 7.03635 18.8856 6.78516 18.6422L6.79194 18.647C8.15117 19.5301 9.66098 19.4703 9.66098 19.4703C9.92245 19.459 10.7961 19.4703 11.7907 19.0211C12.8936 18.5232 13.5203 17.7837 13.5203 17.7837C13.6139 17.6719 14.1307 17.1249 14.4627 16.2912C14.7174 15.6544 14.8019 14.8903 14.8019 14.5844V9.09197C14.8385 9.11213 15.2912 9.39653 15.2912 9.39653C15.2912 9.39653 15.9474 9.79568 16.9679 10.0554C17.699 10.2413 18.6863 10.28 18.6863 10.28V8.19553C19.024 8.27126 19.3119 8.29174 19.4988 8.27289Z"
                    fill="#EE1D52"
                  ></path>
                  <path
                    d="M18.6861 8.19553V10.2793C18.6861 10.2793 17.6989 10.2406 16.9677 10.0547C15.9473 9.7947 15.2911 9.39588 15.2911 9.39588C15.2911 9.39588 14.8383 9.11148 14.8017 9.09132V14.5851C14.8017 14.8909 14.7179 15.6551 14.4626 16.2918C14.1292 17.1255 13.6147 17.6726 13.5201 17.7844C13.5201 17.7844 12.8941 18.5238 11.7905 19.0218C10.7959 19.471 9.92228 19.4596 9.66081 19.471C9.66081 19.471 8.151 19.5308 6.79177 18.6477L6.78498 18.6428C6.64148 18.5038 6.5064 18.3571 6.3804 18.2034C5.94665 17.6745 5.68078 17.0492 5.61397 16.8707C5.61385 16.87 5.61385 16.8692 5.61397 16.8684C5.50646 16.5584 5.2806 15.8137 5.31146 15.0924C5.36606 13.8199 5.81372 13.0389 5.93207 12.8432C6.24553 12.3096 6.65322 11.8322 7.137 11.4322C7.56391 11.0871 8.04779 10.8125 8.56881 10.6196C9.13205 10.3932 9.73517 10.2719 10.3459 10.2621V12.3716C10.3459 12.3716 9.22876 12.0173 8.33481 12.6446C7.70979 13.1088 7.37812 13.5615 7.28045 14.3702C7.27638 14.9654 7.42865 15.8075 8.26393 16.3692C8.36138 16.4309 8.45701 16.4858 8.55084 16.5337C8.69676 16.7233 8.87437 16.8886 9.07649 17.0228C9.89244 17.5393 10.5761 17.5754 11.4504 17.24C12.0334 17.0157 12.4722 16.5102 12.6757 15.9502C12.8035 15.6005 12.8018 15.2485 12.8018 14.8844V4.52881H14.8366C14.9207 5.00694 15.1534 5.68756 15.7685 6.36168C16.0153 6.61622 16.2933 6.84125 16.5964 7.0319C16.6859 7.12454 17.1437 7.58251 17.7314 7.86367C18.0353 8.009 18.3556 8.12035 18.6861 8.19553Z"
                    fill="white"
                  ></path>
                  <path
                    d="M4.80469 16.2231V16.2248L4.85518 16.3616C4.84938 16.3457 4.83061 16.2973 4.80469 16.2231Z"
                    fill="#69C9D0"
                  ></path>
                  <path
                    d="M8.57051 10.6199C8.0495 10.8127 7.56561 11.0873 7.1387 11.4325C6.65477 11.8334 6.24718 12.3118 5.93411 12.8464C5.81576 13.0414 5.3681 13.8231 5.3135 15.0956C5.28264 15.8169 5.5085 16.5615 5.61601 16.8716C5.61589 16.8724 5.61589 16.8731 5.61601 16.8739C5.68383 17.0507 5.94869 17.6761 6.38244 18.2065C6.50844 18.3603 6.64352 18.507 6.78702 18.646C6.32723 18.3412 5.91716 17.9727 5.57023 17.5526C5.14021 17.0283 4.87501 16.4094 4.80583 16.2268C4.80574 16.2255 4.80574 16.2242 4.80583 16.2229V16.2206C4.69798 15.9108 4.47144 15.1658 4.50298 14.4436C4.55758 13.1711 5.00523 12.39 5.12359 12.1944C5.43657 11.6597 5.84417 11.1813 6.32818 10.7805C6.755 10.4352 7.23891 10.1606 7.75999 9.96788C8.08501 9.83863 8.42361 9.74328 8.76992 9.68348C9.29183 9.59616 9.82487 9.58859 10.3492 9.66105V10.2624C9.738 10.2719 9.13427 10.3933 8.57051 10.6199Z"
                    fill="#69C9D0"
                  ></path>
                  <path
                    d="M14.8418 4.52897H12.807V14.8849C12.807 15.2489 12.807 15.6 12.6809 15.9507C12.4754 16.5104 12.0382 17.0158 11.4556 17.2401C10.581 17.5768 9.8973 17.5395 9.0817 17.023C8.87923 16.8894 8.70116 16.7246 8.55469 16.5354C9.24957 16.8907 9.87153 16.8845 10.642 16.5881C11.2243 16.3638 11.6621 15.8584 11.867 15.2984C11.9952 14.9486 11.9935 14.5966 11.9935 14.2329V3.875H14.8032C14.8032 3.875 14.7716 4.13243 14.8418 4.52897ZM18.6896 7.6194V8.19569C18.3597 8.12039 18.04 8.00904 17.7366 7.86383C17.1489 7.58267 16.6911 7.1247 16.6016 7.03206C16.7055 7.09744 16.8133 7.15691 16.9244 7.21018C17.639 7.55212 18.3427 7.65418 18.6896 7.6194Z"
                    fill="#69C9D0"
                  ></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    width="24"
                    height="24"
                    rx="12"
                    fill="url(#paint0_linear_2942_313004)"
                  ></rect>
                  <path
                    d="M15.8766 13.0415L16.3395 10.0252H13.4453V8.06787C13.4453 7.24268 13.8496 6.43831 15.1458 6.43831H16.4616V3.87028C16.4616 3.87028 15.2676 3.6665 14.126 3.6665C11.7425 3.6665 10.1846 5.11117 10.1846 7.7264V10.0252H7.53516V13.0415H10.1846V20.3332H13.4453V13.0415H15.8766Z"
                    fill="white"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_2942_313004"
                      x1="12"
                      y1="0"
                      x2="12"
                      y2="23.9288"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18ACFE"></stop>
                      <stop offset="1" stopColor="#0163E0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2942_313007)">
                    <path
                      d="M4.47234 0.121397C5.29404 -0.00818096 6.1297 -0.00895688 6.95993 0.00966509L6.88854 0.0756179C5.80226 0.787132 4.90142 1.76401 4.25043 2.88521C2.94534 5.12993 2.46971 7.78434 2.57756 10.3573C2.68463 12.4522 3.18743 14.5589 4.25354 16.3799C4.432 16.7058 4.72917 16.9937 4.73383 17.3894C4.76719 18.2382 4.34742 19.0382 3.77945 19.645C3.81669 19.6838 3.85316 19.7226 3.89041 19.7614C4.42191 20.3418 4.9891 20.8872 5.52914 21.4599C6.29652 22.3273 7.17098 23.0955 7.92284 23.9785C6.67206 23.9971 5.40655 24.0553 4.17051 23.8217C2.6148 23.5199 1.23367 22.4414 0.574144 20.9997C0.174547 20.1664 0.0550561 19.2345 0.0240194 18.3213C0.0232435 14.1049 0.0232435 9.8894 0.0240194 5.67385C0.0410896 4.26479 0.414305 2.79055 1.40593 1.74539C2.19115 0.860069 3.30304 0.284339 4.47234 0.121397Z"
                      fill="#0068FF"
                    ></path>
                    <path
                      d="M15.8645 7.86328C16.1973 7.86328 16.5302 7.86328 16.8639 7.86328C16.8584 9.81316 16.8584 11.7638 16.8639 13.7137C16.538 13.6679 15.9956 13.8766 15.873 13.4429C15.8528 11.5838 15.8715 9.72315 15.8645 7.86328Z"
                      fill="#0068FF"
                    ></path>
                    <path
                      d="M5.6818 7.93251C7.23053 7.93096 8.77771 7.92087 10.3257 7.93173C10.3148 8.23511 10.2977 8.56565 10.0944 8.81084C9.03609 10.1283 8.00024 11.4629 6.94267 12.7804C8.06697 12.7874 9.19127 12.7828 10.3156 12.7828C10.2946 13.0458 10.387 13.3523 10.2163 13.5804C10.1092 13.7278 9.9152 13.7146 9.75458 13.7162C8.34785 13.7084 6.94112 13.7232 5.53516 13.7084C5.53904 13.4112 5.54214 13.0823 5.75008 12.8456C6.79602 11.5335 7.85437 10.2308 8.89565 8.91559C7.82566 8.91714 6.7549 8.90861 5.68491 8.92025C5.67792 8.59126 5.68025 8.2615 5.6818 7.93251Z"
                      fill="#0068FF"
                    ></path>
                    <path
                      d="M19.343 9.22359C20.4572 8.97452 21.6661 9.70621 21.971 10.8033C22.3535 11.9447 21.6552 13.3018 20.5014 13.6494C19.5214 13.9947 18.3482 13.5439 17.84 12.6407C17.4412 11.9734 17.4171 11.0997 17.7795 10.4131C18.0868 9.80707 18.6803 9.36403 19.343 9.22359ZM19.3243 10.2121C18.6446 10.4519 18.2784 11.279 18.5438 11.947C18.7634 12.5786 19.5028 12.9651 20.1453 12.7711C20.8785 12.5957 21.3216 11.7368 21.0616 11.033C20.8444 10.3362 20.0025 9.93432 19.3243 10.2121Z"
                      fill="#0068FF"
                    ></path>
                    <path
                      d="M11.0877 10.0363C11.6239 9.37208 12.5627 9.04464 13.3899 9.2813C13.663 9.35035 13.9105 9.48691 14.1495 9.63201C14.1472 9.55907 14.1417 9.41398 14.1394 9.34104C14.4521 9.33949 14.764 9.34027 15.0767 9.33872C15.0752 10.7974 15.0736 12.2562 15.0775 13.7157C14.8478 13.7094 14.6143 13.7366 14.3885 13.69C14.2302 13.6256 14.1813 13.4526 14.1185 13.3114C13.2556 13.9818 11.9001 13.8297 11.1832 13.0135C10.4189 12.2228 10.3793 10.8758 11.0877 10.0363ZM12.3509 10.2318C11.6324 10.4847 11.284 11.4104 11.6479 12.0777C11.9583 12.7279 12.832 13.001 13.4566 12.6426C14.0362 12.3384 14.3039 11.5834 14.0548 10.9798C13.8135 10.3234 12.9996 9.95557 12.3509 10.2318Z"
                      fill="#0068FF"
                    ></path>
                    <path
                      d="M6.88825 0.0754911C7.06205 0.0258325 7.24362 0.0103142 7.42363 0.00488281C10.5265 0.0165215 13.6294 0.00333098 16.7323 0.00876239C17.5617 0.0188493 18.3959 -0.0370166 19.2191 0.0894576C20.3589 0.17636 21.4561 0.65898 22.3041 1.4217C23.3687 2.43893 23.9367 3.90386 23.9545 5.36491C23.9553 9.47804 23.953 13.5943 23.9568 17.7058C23.946 17.7299 23.925 17.7796 23.9142 17.8044C22.8085 19.0412 21.3218 19.8784 19.7677 20.42C17.6735 21.1338 15.4303 21.3635 13.229 21.1959C11.0278 21.0066 8.80942 20.4316 6.94256 19.215C5.98819 19.6394 4.93527 19.8474 3.89011 19.7612C3.85287 19.7224 3.8164 19.6837 3.77916 19.6449C4.34713 19.0381 4.7669 18.2381 4.73353 17.3893C4.72888 16.9936 4.4317 16.7057 4.25324 16.3798C3.18713 14.5587 2.68434 12.4521 2.57726 10.3571C2.46941 7.78421 2.94505 5.12981 4.25014 2.88508C4.90113 1.76388 5.80197 0.787006 6.88825 0.0754911ZM15.864 7.86336C15.871 9.72322 15.8524 11.5839 15.8726 13.443C15.9952 13.8767 16.5375 13.668 16.8634 13.7138C16.858 11.7639 16.858 9.81323 16.8634 7.86336C16.5298 7.86336 16.1969 7.86336 15.864 7.86336ZM5.68093 7.93241C5.67937 8.2614 5.67705 8.59116 5.68403 8.92015C6.75402 8.90851 7.82478 8.91705 8.89477 8.9155C7.85349 10.2307 6.79514 11.5334 5.74921 12.8455C5.54126 13.0822 5.53816 13.4112 5.53428 13.7083C6.94024 13.7231 8.34697 13.7083 9.75371 13.7161C9.91432 13.7145 10.1083 13.7277 10.2154 13.5803C10.3861 13.3522 10.2937 13.0457 10.3147 12.7827C9.19039 12.7827 8.06609 12.7873 6.94179 12.7803C7.99936 11.4628 9.03521 10.1283 10.0936 8.81075C10.2968 8.56556 10.3139 8.23502 10.3248 7.93164C8.77683 7.92077 7.22965 7.93086 5.68093 7.93241ZM19.3409 9.22354C18.6783 9.36398 18.0847 9.80702 17.7774 10.413C17.4151 11.0997 17.4391 11.9734 17.838 12.6407C18.3462 13.5438 19.5194 13.9946 20.4994 13.6494C21.6531 13.3017 22.3515 11.9447 21.9689 10.8033C21.664 9.70615 20.4551 8.97447 19.3409 9.22354ZM11.0867 10.0359C10.3783 10.8755 10.4179 12.2224 11.1822 13.0131C11.8991 13.8294 13.2546 13.9815 14.1175 13.3111C14.1803 13.4523 14.2292 13.6253 14.3875 13.6897C14.6133 13.7363 14.8468 13.7091 15.0765 13.7153C15.0726 12.2558 15.0742 10.7971 15.0757 9.33837C14.763 9.33992 14.4511 9.33915 14.1384 9.3407C14.1407 9.41363 14.1462 9.55873 14.1485 9.63167C13.9095 9.48657 13.662 9.35001 13.3889 9.28095C12.5617 9.0443 11.6229 9.37173 11.0867 10.0359Z"
                      fill="white"
                    ></path>
                    <path
                      d="M12.3487 10.2314C12.9974 9.95516 13.8113 10.3229 14.0526 10.9794C14.3017 11.583 14.034 12.338 13.4544 12.6422C12.8298 13.0006 11.9561 12.7275 11.6457 12.0773C11.2818 11.41 11.6302 10.4843 12.3487 10.2314Z"
                      fill="white"
                    ></path>
                    <path
                      d="M19.3205 10.2123C19.9987 9.9345 20.8405 10.3364 21.0578 11.0332C21.3177 11.737 20.8747 12.5959 20.1414 12.7713C19.499 12.9652 18.7595 12.5788 18.54 11.9472C18.2746 11.2792 18.6408 10.452 19.3205 10.2123Z"
                      fill="white"
                    ></path>
                    <path
                      d="M23.9147 17.8045L23.976 17.7378C24.0078 18.9505 23.8767 20.2161 23.2815 21.2954C22.5894 22.5617 21.334 23.5021 19.9218 23.8031C19.1296 23.9668 18.3172 24.0033 17.5103 23.9932C15.0281 23.994 12.546 23.9932 10.0638 23.994C9.34997 23.9824 8.63457 24.0157 7.92306 23.9785C7.1712 23.0955 6.29674 22.3273 5.52936 21.4599C4.98932 20.8872 4.42213 20.3418 3.89062 19.7614C4.93578 19.8475 5.9887 19.6396 6.94308 19.2151C8.80993 20.4318 11.0283 21.0067 13.2295 21.196C15.4308 21.3636 17.674 21.134 19.7682 20.4201C21.3223 19.8785 22.809 19.0413 23.9147 17.8045Z"
                      fill="#005BE0"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2942_313007">
                      <rect width="24" height="24" rx="12" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="12" fill="#FC0D1B"></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.34376 6.55131C5.22972 6.60651 4.33483 7.47881 4.26253 8.59187C4.19327 9.65827 4.125 10.9704 4.125 12C4.125 13.0296 4.19327 14.3417 4.26253 15.4081C4.33483 16.5212 5.22972 17.3935 6.34376 17.4487C7.95697 17.5286 10.2627 17.625 12 17.625C13.7373 17.625 16.043 17.5286 17.6562 17.4487C18.7703 17.3935 19.6652 16.5212 19.7375 15.4081C19.8067 14.3417 19.875 13.0296 19.875 12C19.875 10.9704 19.8067 9.65827 19.7375 8.59187C19.6652 7.47881 18.7703 6.60651 17.6562 6.55131C16.043 6.47139 13.7373 6.375 12 6.375C10.2627 6.375 7.95697 6.47139 6.34376 6.55131ZM14.8125 12L10.3125 14.25V9.75L14.8125 12Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="b flex w-3/12 flex-col">
          <h2 className="font-bold text-sm mb-5">ĐĂNG KÝ NHẬN TIN TỪ TOKYOLIFE</h2>
          <div className="flex space-x-2 mt-2">
            <input
              type="email"
              placeholder="Nhập địa chỉ Email"
              className="border p-2 rounded w-2/3"
            />
            <button className="bg-black text-white p-2 rounded">Đăng ký</button>
          </div>
          <p className="mt-4">
            Cài App nhận{" "}
            <strong className="text-red-700">Ưu đãi 50% Sinh Nhật</strong> <br />
            Tích Điểm Mọi Hóa Đơn
          </p>
          <div className="flex space-x-2 mt-4">
            <img src={qrcode} alt="QR Code" className="w-30 h-30" />
            <div className="flex flex-col justify-center space-y-2">
              <img src={appstore} alt="App Store" className="w-32" />
              <img src={googleplay} alt="Google Play" className="w-32" />
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <img src={cod} alt="COD" className="w-30" />
            <img src={vnpay} alt="VNPay" className="w-30" />
          </div>
        </div>
      </div>
      <div className="contact container border-dashed border-t-[1px] border-gray-600">
        <div className="my-5">
          <span>
            <div className="my-2">
              <strong className="text-black">Công ty cổ phần STAAAR</strong>
            </div>
            <u>Địa chỉ:</u> Tầng 6, số 96 Thái Hà Phường Trung Liệt, Quận Đống Đa,
            Thành phố Hà Nội, Việt Nam.
            <br />
            <u>Người đại diện:</u> Hoàng Thị Vân Anh
            <br />
            <u>Mã số thuế:</u> 0109749326, ngày cấp ĐKKD
            29/04/2021.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Nơi cấp:</u> Cục cảnh sát
            quản lý hành chính về trật tự xã hội.
            <br />
            <u>Điện thoại:</u> 024.7300.6999&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <u>Email:</u> cskh@tokyolife.vn
          </span>
        </div>
      </div>
      <div className="footer-copyright flex space-x-4 justify-center h-[64px] bg-black items-center text-white">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="copyright">
          Copyright © 2014-2024 Tokyolife.vn All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer