import React from "react";

const Member = () => {
  return (
    // Front-end 6조
    <>
      <h2 className="mt-4 border border-success border-start-0 border-end-0 p-3">
        Member
      </h2>
      <div class="row row-col-3 m-5 ">
        <div class="col ">
          <div className="card col border-dark mb-3">
            <div className="card-header">배민준 (팀장)</div>
            <div className="card-body ">
              <h5 className="card-title">BookMain 담당 </h5>
              <p className="card-text text-success">Front-end 6조</p>
              <a href="https://github.com/HumanJSEngine/KyoboBooks">
                <img
                  src="/photos/github.png"
                  alt="github"
                  style={{ width: 80 }}
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div className="card col border-dark mb-3">
            <div className="card-header">박시은</div>
            <div className="card-body ">
              <h5 className="card-title">Header, Payment 및 LogIn 담당</h5>
              <p className="card-text text-success">Front-end 6조</p>
              <a href="https://github.com/Yenhj/KyoboBooks">
                <img
                  src="/photos/github.png"
                  alt="github"
                  style={{ width: 80 }}
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div className="card col border-dark mb-3">
            <div className="card-header">이예은</div>
            <div className="card-body ">
              <h5 className="card-title">BookList 담당</h5>
              <p className="card-text text-success">Front-end 6조</p>
              <a href="https://github.com/Yenhj/KyoboBooks">
                <img
                  src="/photos/github.png"
                  alt="github"
                  style={{ width: 80 }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-col-3 m-5  ">
        <div class="col ">
          <div className="card col border-dark mb-3">
            <div className="card-header">문주영 (팀장)</div>
            <div className="card-body ">
              <h5 className="card-title"> 백앤드팀 전체 서포트</h5>
              <p className="card-text text-success">Back-end 1조</p>
              <a href="https://github.com/moonjyoung">
                <img
                  src="/photos/github.png"
                  alt="github"
                  style={{ width: 80 }}
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div className="card col border-dark mb-3">
            <div className="card-header">이도영</div>
            <div className="card-body ">
              <h5 className="card-title">데이터 수집 담당</h5>
              <p className="card-text text-success">Back-end 1조</p>
              <a href="https://github.com/doyouee">
                <img
                  src="/photos/github.png"
                  alt="github"
                  style={{ width: 80 }}
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div className="card col border-dark mb-3">
            <div className="card-header">이태훈</div>
            <div className="card-body ">
              <h5 className="card-title">서비스 구축 담당</h5>
              <p className="card-text text-success">Back-end 1조</p>
              <a href="https://github.com/affkdy">
                <img
                  src="/photos/github.png"
                  alt="github"
                  style={{ width: 80 }}
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div className="card col border-dark mb-3">
            <div className="card-header">이호진</div>
            <div className="card-body ">
              <h5 className="card-title">데이터베이스 총괄</h5>
              <p className="card-text text-success">Back-end 1조</p>
              <a href="https://github.com/itwit22ee">
                <img
                  src="/photos/github.png"
                  alt="github"
                  style={{ width: 80 }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
