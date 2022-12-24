import Cookie from '@/components/Cookie';
import IntroTitle from '@/components/IntroTitle';
import SignForm from '@/components/SignForm';

const MainHomeContent = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 items-center gap-12">
        <IntroTitle />
        <SignForm />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <MainHomeContent />
      <Cookie />
    </>
  );
};
export default Home;
