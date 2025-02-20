const CommonTable = ({ heads, cols, data, numbered, className = "" }) => {
  return (
    <table className={`w-full border-collapse ${className}`}>
      <thead>
        <tr className="bg-stone-200">
          {numbered && <th className="border p-1 text-sm w-[30px]">#</th>}
          {heads.map((head) => (
            <th
              key={head.label}
              className={`border p-1 text-sm ${head.className || ""}`}
            >
              {head.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="[&>*:nth-child(even)]:bg-stone-200">
        {data.map((d, index) => (
          <tr key={d?.id || d}>
            {numbered && (
              <td className="border py-1 px-2 text-sm">{index + 1}</td>
            )}
            {cols.map((col) => (
              <td
                key={col.key}
                className={`border py-1 px-2 text-sm ${col.className || ""}`}
              >
                {col.render ? col.render(d, index) : d[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommonTable;
