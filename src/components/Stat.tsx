const Stat = ({ label, value }: { label: string; value: number }) => (
  <div className="text-center sm:text-left">
    <p className="text-[13px] ">{label}</p>
    <p className="text-h2 font-bold">{value.toLocaleString()}</p>
  </div>
);

export default Stat;
