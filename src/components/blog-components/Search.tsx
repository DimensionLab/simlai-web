const Search = () => {
  return (
    <section className="w-full px-4">
      <main className="w-full flex flex-col gap-y-4">
        <h1 className="font-bold text-[28px]">Blog</h1>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <label className="text-[#7C7F8B] text-xs">SEARCH BY KEYWORD</label>
            <input type="text" placeholder="Input text" className="bg-[#373A45] py-4 px-4 rounded text-sm text-[#7C7F8B]"/>
          </div>
          <div className="flex flex-col">
            <label className="text-[#7C7F8B] text-xs">FILTER BY CATEGORY</label>
            <div className="bg-[#373A45] py-4 px-4 rounded text-sm text-white flex justify-between items-center">
              <span>Model Engineer</span>
              <img src="assets/simlai/dropdown-icon.svg" alt="" />
            </div>
          </div>
          <button className="w-full bg-[#61646F] py-4 px-4 rounded">Submit</button>
        </div>
      </main>
    </section>
  );
}

export default Search;