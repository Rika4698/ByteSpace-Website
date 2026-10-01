type TextFieldProps = React.ComponentProps<"input"> & {
  id: string;
  label: string;
  error?: string;
  trailing?: React.ReactNode;
};

export function TextField({ id, label, error, trailing, className = "", ...inputProps }: TextFieldProps) {
  const errorId = `${id}-error`;

 
  const inputPadding = trailing ? "pr-14 pl-6" : "px-6";

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-label-s font-medium text-neutral-950">
        {label}
      </label>
      <div className="relative">
        
        <input
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`h-13 w-full rounded-xl border border-neutral-100 bg-white ${inputPadding} text-body-l text-neutral-950 placeholder:text-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 aria-invalid:border-red-600`}
          {...inputProps}
        />
        {trailing && <div className="absolute inset-y-0 right-4 flex items-center">{trailing}</div>}
      </div>
      {error && (
        <p id={errorId} className="text-body-s text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
