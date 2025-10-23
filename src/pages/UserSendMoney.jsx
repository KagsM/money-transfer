import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './UserSendMoney.css';

const UserSendMoney = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const beneficiary = location.state?.beneficiary;

  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Mock user balance
  const [userBalance] = useState(1250.75);

  const handleBack = () => {
    navigate('/user/contacts');
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSendMoney = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    if (parseFloat(amount) > userBalance) {
      alert('Insufficient balance');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowSuccess(true);
      
      // Reset form
      setAmount('');
      setDescription('');
      
      // Navigate back after success
      setTimeout(() => {
        navigate('/user/contacts');
      }, 3000);
      
    } catch (error) {
      alert('Transaction failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="send-money-success">
        <div className="success-content">
          <div className="success-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#10B981"/>
              <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2>Money Sent Successfully!</h2>
          <p>${parseFloat(amount).toFixed(2)} sent to {beneficiary?.name}</p>
          <div className="success-details">
            <p>Transaction will be processed within 24 hours</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="send-money">
      {/* Header */}
      <div className="send-money-header">
        <button className="back-button" onClick={handleBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M15 18L9 12L15 6" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="header-title">Send Money</h1>
      </div>

      {/* Recipient Info */}
      {beneficiary && (
        <div className="recipient-section">
          <div className="recipient-card">
            <div 
              className="recipient-avatar"
              style={{ backgroundColor: beneficiary.color }}
            >
              {beneficiary.initials}
            </div>
            <div className="recipient-info">
              <h3 className="recipient-name">{beneficiary.name}</h3>
              <p className="recipient-email">{beneficiary.email}</p>
              <p className="recipient-phone">{beneficiary.phone}</p>
            </div>
          </div>
        </div>
      )}

      {/* Send Money Form */}
      <div className="send-money-form">
        {/* Balance Display */}
        <div className="balance-card">
          <p className="balance-label">Available Balance</p>
          <p className="balance-amount">${userBalance.toFixed(2)}</p>
        </div>

        {/* Amount Input */}
        <div className="form-group">
          <label className="form-label">Amount to Send</label>
          <div className="amount-input-container">
            <span className="currency-symbol">$</span>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="0.00"
              className="amount-input"
            />
          </div>
        </div>

        {/* Quick Amount Buttons */}
        <div className="quick-amounts">
          <button 
            className="quick-amount-btn"
            onClick={() => setAmount('10')}
          >
            $10
          </button>
          <button 
            className="quick-amount-btn"
            onClick={() => setAmount('25')}
          >
            $25
          </button>
          <button 
            className="quick-amount-btn"
            onClick={() => setAmount('50')}
          >
            $50
          </button>
          <button 
            className="quick-amount-btn"
            onClick={() => setAmount('100')}
          >
            $100
          </button>
        </div>

        {/* Description */}
        <div className="form-group">
          <label className="form-label">Description (Optional)</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What's this for?"
            className="description-input"
            rows="3"
          />
        </div>

        {/* Transaction Summary */}
        {amount && parseFloat(amount) > 0 && (
          <div className="transaction-summary">
            <div className="summary-row">
              <span>Amount</span>
              <span>${parseFloat(amount).toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Transaction Fee</span>
              <span>$0.00</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${parseFloat(amount).toFixed(2)}</span>
            </div>
          </div>
        )}

        {/* Send Button */}
        <button 
          className={`send-button ${isLoading ? 'loading' : ''}`}
          onClick={handleSendMoney}
          disabled={!amount || parseFloat(amount) <= 0 || isLoading}
        >
          {isLoading ? (
            <>
              <div className="loading-spinner"></div>
              Sending...
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              Send Money
            </>
          )}
        </button>

        {/* Security Notice */}
        <div className="security-notice">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#6B7280" strokeWidth="2"/>
            <path d="M12 6V12L16 14" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p>Transactions are processed securely and may take up to 24 hours to complete.</p>
        </div>
      </div>
    </div>
  );
};

export default UserSendMoney;
