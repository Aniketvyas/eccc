const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe);
      }
    };
  
    return (
      <div
        className={`border border-2 rounded-xl ${
          bigShoeImg === imgURL.bigShoe ? "border-purple" : ""
        } cursor-pointer col-sm-flex-1`}
        onClick={handleClick}
      >
        <div className="d-flex justify-content-center align-items-center bg-card bg-center bg-cover sm-w-40 sm-h-40 rounded-xl max-sm-p-4">
          <img
            src={imgURL.thumbnail}
            alt="shoe collection"
            width={127}
            height={103}
            className="img-fluid"
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;
  