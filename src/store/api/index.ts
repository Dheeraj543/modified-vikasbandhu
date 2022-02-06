export const fetchTransactionsDetails = async () => {
  const res = await fetch(
    " https://snkajst53g.execute-api.us-east-2.amazonaws.com/default/sellertransactions"
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.Items;
};

export const fetchMatchesDetails = async () => {
  const res = await fetch(
    "https://omshxe9c85.execute-api.us-east-2.amazonaws.com/default/sellermatches"
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.Items;
};

export const fetchDashboardData = async () => {
  const res = await fetch(
    "https://l644gpuxjb.execute-api.us-east-2.amazonaws.com/default/Dashboard"
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data;
};
export const fetchUsersDetails = async () => {
  const res = await fetch(
    "https://6194bhpuwb.execute-api.us-east-1.amazonaws.com/test/vbusers"
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.Result;
};
