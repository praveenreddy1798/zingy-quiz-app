import { CategoryCard, Loader, Navbar } from "../components";
import { useQueryQuizCategories } from "../services";
const Home = () => {
  const { loading, quizCategoriesInfo } = useQueryQuizCategories();
  return (
    <div className="page-wrapper">
      <Navbar />
      <Loader loading={loading} />
      <main class="main main-section main-section-strech pd-lg">
        <h1 class="text-align-center white-color">Zingy Quiz</h1>
        <div class="flex-center mg-xlg gap-2">
          {quizCategoriesInfo.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </main>
    </div>
  );
};

export { Home };
