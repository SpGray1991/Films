import preloader from "../../images/loader.svg";

const Preloader: React.FC = () => {
  return (
    <div>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
