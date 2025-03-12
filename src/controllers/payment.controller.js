/**
 * 
 */

const PaymentController = {
    /**
    * 
    */
    async createPayment(req, res) {
      try { 
        const { data, recibo, valor, obervacao } = req.body;
        return res.status(201).json({ message: 'Payment created', data: {data, recibo, valor, obervacao} });
      } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
      }
    },
    };

export default PaymentController;