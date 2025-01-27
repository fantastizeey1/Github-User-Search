const Stat = ({ label, value }: { label: string; value: number }) => (
  <div className="text-center sm:text-left">
    <p className="text-[13px] opacity-75">{label}</p>
    <p className="text-[22px] font-bold">{value.toLocaleString()}</p>
  </div>
);

export default Stat;
