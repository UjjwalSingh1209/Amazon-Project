import { cart, calculateCartQuantity } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOption.js';
import { formatCurrency } from '../utils/money.js';

export function renderPaymentSummary() {
    let productPricePaisa = 0;
    let shippingPricePaisa = 0;

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPricePaisa += product.pricePaisa * cartItem.quantity;

        const deliveryOption = getDeliveryOption(
            cartItem.deliveryOptionId
        );
        shippingPricePaisa += deliveryOption.pricePaisa;
    });
    const totalBeforeTaxPaisa = productPricePaisa + shippingPricePaisa;

    const taxPaisa = totalBeforeTaxPaisa * 0.1;

    const totalPaisa = totalBeforeTaxPaisa + taxPaisa;

    const paymentSummaryHTML = `
    <div class="payment-summary-title">
        Order Summary
    </div>

    <div class="payment-summary-row">
        <div>Items (${calculateCartQuantity()}):</div>
        <div class="payment-summary-money">₹${formatCurrency(productPricePaisa)}</div>
    </div>

    <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money js-payment-summary-shipping">₹${formatCurrency(shippingPricePaisa)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">₹${formatCurrency(totalBeforeTaxPaisa)}</div>
    </div>

    <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">₹${formatCurrency(taxPaisa)}</div>
    </div>

    <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money js-payment-summary-total">₹${formatCurrency(totalPaisa)}</div>
    </div>
    <button class="place-order-button button-primary">
          Place your order
        </button>
`;

document.querySelector(`.js-payment-summary`).innerHTML = paymentSummaryHTML;

}