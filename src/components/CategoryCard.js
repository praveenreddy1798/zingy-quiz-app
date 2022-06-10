import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category = {} }) => {
  const navigate = useNavigate();
  const { _id, categoryName, description, image } = category;
  return (
    <div key={_id} class="card bg-white border-radius-lg">
      <div class="card-image-container border-radius-lg pd-sm h-100 w-100 flex-evenly">
        <img class="card-image border-radius-lg" src={image} alt="category" />
      </div>
      <div class="flex-vertical mg-sm row-gap-p5 align-center">
        <h3>{categoryName}</h3>
        <h4 class="text-align-center regular-dark mg-t-xsm">{description}</h4>
        <button
          onClick={() => navigate(`/rules/${_id}`)}
          class="btn btn-primary outline outline-primary pd-t-xsm"
        >
          <h4>Play Now</h4>
        </button>
      </div>
    </div>
  );
};

export { CategoryCard };
