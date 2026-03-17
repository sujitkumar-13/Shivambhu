export const VapiWidget = () => {
  return (
    <div
      className="box-border caret-transparent"
    >
      <div className="box-border caret-transparent font-ui_sans_serif">
        <div className="fixed box-border caret-transparent z-[9999] right-6 bottom-6">
          <div className="relative items-center bg-slate-900 shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent flex h-12 justify-center w-12 p-0 rounded-2xl md:w-auto md:px-4 md:py-3">
            <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] gap-y-2">
              <img
                src="https://c.animaapp.com/mmuegslhBtHcOd/assets/icon-1.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 w-6 md:h-7 md:w-7"
              />
              <div className="[align-items:normal] box-content caret-black block flex-row justify-normal min-h-0 min-w-0 ml-0 md:items-start md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-2 md:scroll-m-0 md:scroll-p-[auto]">
                <span className="text-black text-base font-normal box-content caret-black inline leading-[normal] min-h-0 min-w-0 md:text-white md:text-sm md:font-medium md:aspect-auto md:box-border md:caret-transparent md:block md:leading-[16.8px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
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
