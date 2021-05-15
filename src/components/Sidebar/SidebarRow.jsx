import "./SidebarRow.css";
const SidebarRow = ({ Item, text, active }) => {
  return (
    <div className={`sidebarRow ${active && "sidebarRow__active"}`}>
      <Item className="sidebarRow_icon" />
      <h3>{text}</h3>
    </div>
  );
};

export default SidebarRow;
