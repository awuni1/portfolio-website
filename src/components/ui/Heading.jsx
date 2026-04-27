import HeadingSVG from "./HeadingSVG";

export default function Heading({ title, number }) {
  return (
    <>
      {number && (
        <div className="mb-4 flex items-center gap-3 font-mono text-body-4 uppercase tracking-widest text-secondary-600">
          <span>{number}</span>
          <span className="h-px flex-1 bg-secondary-500/40"></span>
          <span className="text-secondary-500">{title}</span>
        </div>
      )}
      <div className="section-heading select-none">
        <div className="heading flex translate-y-56 items-center justify-center space-x-[3%]">
          <HeadingSVG />
          <h2 className="w-fit text-5xl sm:text-heading-2 font-medium uppercase text-secondary-600">
            {title}
          </h2>
          <HeadingSVG />
        </div>
      </div>
    </>
  );
}
