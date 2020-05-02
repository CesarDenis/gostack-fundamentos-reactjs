const formatValue = (value: number): string => {
  const formatConfig = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    currencyDisplay: 'symbol',
  };

  return Intl.NumberFormat('pt-BR', formatConfig).format(value);
};

export default formatValue;
