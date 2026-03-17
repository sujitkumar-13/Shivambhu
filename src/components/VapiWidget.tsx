export const VapiWidget = () => {
  return (
    <div className="">
      <div className="font-sans">
        <div className="fixed z-[9999] right-6 bottom-6">
          <div className="relative items-center bg-slate-900 shadow-xl flex h-12 justify-center w-12 p-0 rounded-2xl md:w-auto md:px-4 md:py-3 cursor-pointer hover:bg-slate-800 transition-colors">
            <div className="items-center gap-x-2 flex">
              <img
                src="https://c.animaapp.com/mmuegslhBtHcOd/assets/icon-1.svg"
                alt="Icon"
                className="h-6 w-6 md:h-7 md:w-7"
              />
              <div className="hidden md:flex md:flex-col md:justify-center md:ml-2">
                <span className="text-white text-sm font-medium leading-tight">
                  Talk with Us
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vapi Widget Iframe or Script would go here */}
      <iframe 
        src="https://readdy.ai/api/public/assistant/widget?projectId=5736653e-f27d-49dc-b7e0-1e1dc97926dd"
        title="Talk with Us"
        style={{ display: 'none' }}
      ></iframe>
    </div>
  );
};
