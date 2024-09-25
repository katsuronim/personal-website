import Header from "../components/Header";

function NoPage() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <h1 className="items-center justify-center my-auto text-3xl font-bold">
          Error 404. Page Not Found
        </h1>
      </div>
    </>
  );
}

export default NoPage;
