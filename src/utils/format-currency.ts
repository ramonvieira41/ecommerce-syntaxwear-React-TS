/**
 * Formata valores numéricos para o padrão de moeda brasileira (Real)
 * @param value - Valor a ser formatado (número ou string)
 * @param options - Opções de formatação
 * @returns String formatada como moeda brasileira
 */

interface FormatCurrencyOptions {
  showSymbol?: boolean; // Exibir símbolo R$
  decimals?: number; // Número de casas decimais
  symbol?: string; // Símbolo customizado
}

export const formatCurrency = (
  value: number | string,
  options: FormatCurrencyOptions = {}
): string => {
  const {
    showSymbol = true,
    decimals = 2,
    symbol = 'R$',
  } = options;

  // Converter para número se for string
  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  // Validar se é um número válido
  if (isNaN(numValue)) {
    return showSymbol ? `${symbol} 0,00` : '0,00';
  }

  // Formatar usando Intl.NumberFormat para o padrão brasileiro
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(numValue);

  // Se não quer exibir símbolo, remove o R$
  if (!showSymbol) {
    return formatted.replace(/R\$\s?/, '').trim();
  }

  return formatted;
};

/**
 * Formata um valor para exibição em listas de preços
 * @param value - Valor a ser formatado
 * @returns String formatada como moeda brasileira com símbolo
 */
export const formatPrice = (value: number | string): string => {
  return formatCurrency(value, {
    showSymbol: true,
    decimals: 2,
  });
};

/**
 * Formata um valor sem o símbolo (apenas números)
 * @param value - Valor a ser formatado
 * @returns String formatada sem símbolo
 */
export const formatCurrencyWithoutSymbol = (value: number | string): string => {
  return formatCurrency(value, {
    showSymbol: false,
    decimals: 2,
  });
};

/**
 * Converte string de moeda brasileira para número
 * @param value - String de moeda formatada (ex: "R$ 1.234,56")
 * @returns Valor numérico
 */
export const parseCurrency = (value: string): number => {
  if (!value) return 0;

  // Remove símbolo de moeda e espaços
  const cleaned = value.replace(/R\$\s?/, '').trim();

  // Remove pontos (separador de milhares) e substitui vírgula por ponto
  const normalized = cleaned.replace(/\./g, '').replace(',', '.');

  return parseFloat(normalized) || 0;
};

/**
 * Formata desconto em relação ao valor original
 * @param originalPrice - Preço original
 * @param discountedPrice - Preço com desconto
 * @returns Objeto com valor do desconto e percentual
 */
export const calculateDiscount = (
  originalPrice: number,
  discountedPrice: number
): { amount: string; percentage: number } => {
  const amount = originalPrice - discountedPrice;
  const percentage = Math.round((amount / originalPrice) * 100);

  return {
    amount: formatPrice(amount),
    percentage,
  };
};

/**
 * Formata valor com símbolo customizado
 * @param value - Valor a ser formatado
 * @param customSymbol - Símbolo customizado
 * @returns String formatada com símbolo customizado
 */
export const formatCurrencyCustom = (
  value: number | string,
  customSymbol: string
): string => {
  return formatCurrency(value, {
    showSymbol: true,
    decimals: 2,
    symbol: customSymbol,
  });
};
