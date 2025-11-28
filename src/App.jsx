import { useState } from "react";
import "./App.css";

const DATA = {
  title: "We are married 🧑🏻‍❤️‍👩🏻",
  titleSub: "이제 저희는 함께 걸어가려고 합니다.",
  couple: { groom: "김호진", bride: "박수정" },
  dateTime: "2026년 8월 30일 (일) 오전 11시",
  venue: {
    name: "JK아트컨벤션",
    address: "서울 영등포구 문래로 164 SK리더스뷰 4층 JK아트컨벤션",
    mapUrl: "https://naver.me/Gn0yrSdR",
    image: "/map/jk-map.jpg",
  },
  contact: {
    groom: "010-1234-5678",
    bride: "010-9876-5432",
  },
  accounts: {
    groom: { bank: "국민은행", number: "123-456-789012", holder: "김호진", qr: "/qr-groom.png" },
    bride: { bank: "신한은행", number: "987-654-321098", holder: "박수정", qr: "/qr-bride.png" },
  },
  coverImage: "/sample.jpg",
  icon: {
    kakao: "/map/kakao_logo.png",
    naver: "/map/naver_logo.png",
    tmap: "/map/tmap_logo.png",
  },
  mainMsg:
    "귀한 걸음으로 자리를 빛내주시면 감사하겠습니다.\n따뜻한 응원과 축복을 마음에 깊이 간직하겠습니다.",
};

function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("복사에 실패했습니다. 길게 눌러 직접 복사해주세요.");
    }
  };
  return (
    <button className="btn" onClick={onCopy}>
      {copied ? "복사 완료!" : "계좌번호 복사"}
    </button>
  );
}

export default function App() {
  const d = DATA;
  return (
    <div className="wrap">
      <header
        className="cover"
        style={{ backgroundImage: `url(${d.coverImage})` }}
      >
        <div className="cover-inner">
          <div className="title">{d.title}</div>
          <div className="title sub">{d.titleSub}</div>
        </div>
      </header>

      <main>
        <Section>
          <div className="grid two">
            <div className="card">
              <div className="label">신랑</div>
              <div className="names">{d.couple.groom}</div>
            </div>
            <div className="card">
              <div className="label">신부</div>
              <div className="names">{d.couple.bride}</div>
            </div>
          </div>
        </Section>
        <Section title="인사말">
          <p className="message">{d.mainMsg}</p>
        </Section>

        <Section title="일시">
          <p className="date">{d.dateTime}</p>
        </Section>

        <Section title="오시는길">
          <p className="venue-name">{d.venue.name}</p>
          <p className="venue-address">{d.venue.address}</p>
          <a className="btn" href={d.venue.mapUrl} target="_blank" rel="noreferrer">
            <img src={d.venue.image} alt="지도 이미지" className="map-image" />
            <p className="tip">이미지를 클릭하면 지도 앱으로 이동합니다.</p>
          </a>
          <div className="grid three">
            <a className="btn" href="https://kko.to/35RzS4UUa_" target="_blank" rel="noreferrer">
              <img src={d.icon.kakao} alt="카카오맵 로고" className="map-label" />
              <p className="tip">카카오맵</p>
            </a>
            <a className="btn" href={d.venue.mapUrl} target="_blank" rel="noreferrer">
              <img src={d.icon.naver} alt="네이버지도 로고" className="map-label" />
              <p className="tip">네이버지도</p>
            </a>
            <a className="btn" href="https://tmap.life/ad78b838" target="_blank" rel="noreferrer">
              <img src={d.icon.tmap} alt="T맵 로고" className="map-label" />
              <p className="tip">T맵</p>
            </a>
          </div>
        </Section>

        <Section title="연락처">
          <div className="grid two">
            <div className="card">
              <div className="label">신랑</div>
              <div className="value">{d.contact.groom}</div>
            </div>
            <div className="card">
              <div className="label">신부</div>
              <div className="value">{d.contact.bride}</div>
            </div>
          </div>
        </Section>

        <Section title="마음 전하실 곳">
          <p className="message"></p>
          <div className="grid two">
            <div className="card">
              <div className="label">신랑측</div>
              <div className="value">
                {d.accounts.groom.bank} {d.accounts.groom.number} ({d.accounts.groom.holder})
              </div>
              <CopyButton text={d.accounts.groom.number} />
            </div>

            <div className="card">
              <div className="label">신부측</div>
              <div className="value">
                {d.accounts.bride.bank} {d.accounts.bride.number} ({d.accounts.bride.holder})
              </div>
              <CopyButton text={d.accounts.bride.number} />
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {d.couple.groom} & {d.couple.bride}
      </footer>
    </div>
  );
}