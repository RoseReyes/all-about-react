export function ResultTable({ input }) {
  console.log(input);
  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest</th>
          <th>EOF value</th>
          <th>Annual Investment</th>
        </tr>
        <tbody></tbody>
      </thead>
    </table>
  );
}
