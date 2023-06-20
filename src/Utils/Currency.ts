
/**
 * @desc Conversor a moneda
 */
const ConvertToCurrency = ( ) => {

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'code'
    });

};

export default ConvertToCurrency;