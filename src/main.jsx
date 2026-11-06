import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const A = "/assets/";
const icons = {
  chevron: "07eb1.svg",
  bell: "a1b20.svg",
  sun: "51073.svg",
  moon: "c161b.svg",
  home: "48cd5.svg",
  calendar: "38033.svg",
  user: "74bea.svg",
  trend: "db284.svg",
  account: "ca593.svg",
  selector: "3227b.svg",
  download: "388e5.svg",
  edit: "d14f1.svg",
  dot: "39da3.svg",
  mail: "5e5fb.svg",
  phone: "7c6b9.svg",
  joinDate: "90ad1.svg",
  role: "7ded4.svg",
  users: "ec4c9.svg",
  manager: "111a7.svg",
  contract: "5b868.svg",
  clock: "6c5cc.svg",
  plus: "6f90a.svg",
  success: "f769c.svg",
  close: "2dcb1.svg",
  money: "27a06.svg",
  lock: "517bc.svg",
  logo: "c8879.svg",
  railHome: "2d782.svg",
  grid: "e812d.svg",
  message: "d97b6.svg",
  component: "d52bb.svg",
  veniai: "1c0be.svg",
  package: "56eac.svg",
  railUsers: "04a1a.svg",
  settings: "f48fa.svg",
  help: "5d58e.svg",
  collapse: "29c9f.svg",
};

function Icon({ name, size = 20, className = "" }) {
  return <img className={`icon ${className}`} src={`${A}${icons[name]}`} width={size} height={size} alt="" />;
}

function MiniRail() {
  const top = ["railHome", "grid", "message"];
  const middle = ["component", "veniai", "package"];
  return (
    <aside className="mini-rail">
      <div>
        <div className="brand-mark"><Icon name="logo" size={24} /></div>
        <div className="rail-divider" />
        <div className="rail-group">{top.map((name) => <button className="rail-button" key={name}><Icon name={name} size={24} /></button>)}</div>
        <div className="rail-divider" />
        <div className="rail-group">{middle.map((name) => <button className="rail-button" key={name}><Icon name={name} size={24} /></button>)}</div>
        <div className="rail-divider" />
        <div className="rail-group"><button className="rail-button selected"><Icon name="railUsers" size={24} /></button></div>
      </div>
      <div className="rail-footer">
        <button className="rail-button"><Icon name="settings" size={24} /></button>
        <button className="rail-button"><Icon name="help" size={24} /></button>
        <div className="rail-divider" />
        <div className="rail-avatar"><img src={`${A}avatar-photo.png`} alt="Ánh Nguyễn" /><span /></div>
      </div>
      <button className="collapse"><Icon name="collapse" size={16} /></button>
    </aside>
  );
}

function Header({ dark, setDark }) {
  return (
    <header className="topbar">
      <div className="breadcrumbs"><span>Bảng điều khiển</span><Icon name="chevron" size={16} /><b>HRM</b></div>
      <div className="top-actions">
        <span className="vertical-rule" />
        <button className="icon-button notify"><Icon name="bell" size={40} /></button>
        <div className="theme-switch">
          <button className={!dark ? "active" : ""} onClick={() => setDark(false)} aria-label="Giao diện sáng"><Icon name="sun" size={20} /></button>
          <button className={dark ? "active" : ""} onClick={() => setDark(true)} aria-label="Giao diện tối"><Icon name="moon" size={20} /></button>
        </div>
        <span className="vertical-rule wide-only" />
        <div className="plan wide-only"><div><strong>Gói Doanh nghiệp</strong><span>Còn 12 ngày</span></div><button>Gia hạn</button></div>
      </div>
    </header>
  );
}

function HrmSidebar() {
  return (
    <aside className="hrm-sidebar">
      <div className="hrm-title"><h1>HRM</h1><p>Không gian HRM của bạn</p></div>
      <div className="dotted" />
      <p className="section-label">CÁ NHÂN</p>
      <nav className="hrm-nav">
        <button><Icon name="home" size={24} /><span>Trang chủ</span></button>
        <button><Icon name="calendar" size={24} /><span>Chuyên cần</span></button>
        <button className="active"><Icon name="user" size={24} /><span>Hồ sơ của tôi</span></button>
        <button><Icon name="trend" size={24} /><span>Phát triển</span></button>
      </nav>
      <div className="mailbox">
        <div className="mail-avatar"><Icon name="account" size={18} /></div>
        <div><strong>Ánh Nguyễn</strong><span>anh.nguyen@venizia.ai</span></div>
        <Icon name="selector" size={20} />
      </div>
    </aside>
  );
}

function InfoRow({ icon, label, value, muted = false }) {
  return (
    <div className="info-row">
      <span className="info-icon"><Icon name={icon} size={16} /></span>
      <div><span>{label}</span><strong className={muted ? "muted" : ""}>{value}</strong></div>
    </div>
  );
}

function ProfileColumn() {
  return (
    <div className="profile-column">
      <section className="card profile-card">
        <div className="profile-avatar">ÁN<span /></div>
        <div className="person"><strong>Ánh Nguyễn</strong><span>Nhân viên&nbsp; · &nbsp;Mã NV: NV-0128</span></div>
        <div className="badges"><span className="success-badge"><Icon name="dot" size={9} />Đang làm việc</span><span>Gắn bó 5 tháng</span></div>
        <div className="dotted" />
        <div className="info-list">
          <InfoRow icon="mail" label="Email công ty" value="anh.nguyen@nexpando.com" />
          <InfoRow icon="phone" label="Điện thoại" value="Chưa cung cấp" muted />
          <InfoRow icon="joinDate" label="Ngày vào làm" value="28/05/2026" />
        </div>
      </section>
      <section className="card job-card">
        <h3>Thông tin công việc</h3>
        <div className="info-list">
          <InfoRow icon="role" label="Chức danh" value="Nhân viên" />
          <InfoRow icon="users" label="Phòng ban" value="Chưa cập nhật" muted />
          <InfoRow icon="manager" label="Quản lý trực tiếp" value="Chưa cập nhật" muted />
          <InfoRow icon="contract" label="Loại hợp đồng" value="Chính thức" />
          <InfoRow icon="clock" label="Thâm niên" value="5 tháng" />
        </div>
      </section>
    </div>
  );
}

function CompletionCard() {
  const missing = ["Ảnh đại diện", "Ngày sinh", "Số điện thoại", "Email cá nhân", "Địa chỉ", "Liên hệ khẩn cấp", "CCCD"];
  return (
    <section className="card completion-card">
      <div className="completion-top"><div><h3>Độ hoàn thiện hồ sơ</h3><p>Còn 7 mục cần bổ sung để HR duyệt hồ sơ của bạn</p></div><strong>30%</strong></div>
      <div className="progress"><span /></div>
      <div className="chips">{missing.map((item) => <button key={item}><Icon name="plus" size={16} />{item}</button>)}</div>
    </section>
  );
}

function SalaryHistory() {
  const months = [
    ["9/2026", "05/10/2026"],
    ["8/2026", "05/09/2026"],
    ["7/2026", "05/08/2026"],
    ["6/2026", "05/07/2026"],
  ];
  return (
    <section className="card salary-card">
      <div className="card-heading"><h3>Lịch sử nhận lương</h3><p>Trạng thái chi trả lương các tháng gần đây</p></div>
      <div className="salary-list">
        {months.map(([month, date]) => (
          <div className="salary-row" key={month}>
            <span className="money-icon"><Icon name="money" size={18} /></span>
            <div><strong>Lương tháng {month}</strong><span>Đã chuyển khoản ngày {date}</span></div>
            <span className="received"><Icon name="dot" size={9} />Đã nhận</span>
          </div>
        ))}
      </div>
      <div className="security"><Icon name="lock" size={16} /><span>Số tiền, các khoản khấu trừ và thuế không hiển thị trên hồ sơ để bảo mật. Chi tiết có trong phiếu lương gửi tới email công ty hằng tháng.</span></div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="card benefits-card">
      <div className="card-heading"><h3>Phúc lợi</h3><p>Bảo hiểm và chế độ nghỉ phép bạn đang được hưởng</p></div>
      <div className="benefits-table">
        <div className="label">Bảo hiểm xã hội</div><div className="value">Đang tham gia</div>
        <div className="label">Bảo hiểm y tế</div><div className="value">Đang tham gia</div>
        <div className="label">Nghỉ phép năm</div><div className="value">12 ngày / năm</div>
        <div className="label">Ngày phép còn lại</div><div className="value">9 ngày</div>
      </div>
    </section>
  );
}

function DetailColumn() {
  const [activeTab, setActiveTab] = useState("salary");
  const [showAlert, setShowAlert] = useState(true);
  const tabs = [["profile", "Hồ sơ cá nhân"], ["history", "Lịch sử công tác"], ["salary", "Lương & Phúc lợi"]];
  return (
    <div className="detail-column">
      <CompletionCard />
      <div className="tabs" role="tablist">
        {tabs.map(([id, label]) => <button className={activeTab === id ? "active" : ""} onClick={() => setActiveTab(id)} key={id}>{label}</button>)}
      </div>
      {activeTab === "salary" ? <>
        {showAlert && <div className="success-alert"><Icon name="success" size={16} /><div><strong>Bạn đã nhận lương tháng 9/2026 thành công</strong><span>Lương đã được chuyển vào tài khoản ngân hàng ****1234 ngày 05/10/2026.</span></div><button onClick={() => setShowAlert(false)} aria-label="Đóng thông báo"><Icon name="close" size={16} /></button></div>}
        <SalaryHistory />
        <Benefits />
      </> : <section className="card empty-tab"><h3>{activeTab === "profile" ? "Hồ sơ cá nhân" : "Lịch sử công tác"}</h3><p>Nội dung đang được cập nhật.</p></section>}
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(false);
  const [toast, setToast] = useState("");
  const action = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  };
  return (
    <div className={dark ? "app dark" : "app"}>
      <MiniRail />
      <Header dark={dark} setDark={setDark} />
      <HrmSidebar />
      <main className="content">
        <div className="page-heading">
          <div><h2>Hồ sơ của tôi</h2><p>Thông tin cá nhân, công việc và năng lực của bạn</p></div>
          <div className="page-actions">
            <button onClick={() => window.print()}><Icon name="download" size={16} />Xuất PDF</button>
            <button onClick={() => action("Đã mở yêu cầu nghỉ phép")}><Icon name="calendar" size={16} />Xin nghỉ phép</button>
            <button className="primary" onClick={() => action("Đã gửi yêu cầu sửa hồ sơ")}><Icon name="edit" size={16} />Yêu cầu sửa hồ sơ</button>
          </div>
        </div>
        <div className="body-grid"><ProfileColumn /><DetailColumn /></div>
      </main>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
