import { useState, useEffect } from "react";

export default function Plausible() {
  const [isExcluded, setIsExcluded] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check initial exclusion state
    const exclusionState = localStorage.getItem("plausible_ignore") === "true";
    setIsExcluded(exclusionState);
  }, []);

  const toggleExclusion = () => {
    if (isExcluded) {
      // Show confirmation modal for stopping exclusion
      setShowModal(true);
    } else {
      // Direct action for starting exclusion
      localStorage.setItem("plausible_ignore", "true");
      setIsExcluded(true);
    }
  };

  const confirmStopExclusion = () => {
    localStorage.removeItem("plausible_ignore");
    setIsExcluded(false);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleModalClick = (e) => {
    if (e.target.id === "confirmModal") {
      closeModal();
    }
  };

  if (isExcluded === null) {
    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          maxWidth: "600px",
          margin: "20px auto",
          padding: "15px",
          textAlign: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 20px auto;
            padding: 15px;
            line-height: 1.4;
          }

          .status-container {
            padding: 12px;
            border-radius: 8px;
            margin: 15px 0;
            font-weight: bold;
            font-size: 16px;
            text-align: center;
          }

          .not-excluded {
            background-color: #ffebee;
            color: #c62828;
            border: 2px solid #ef5350;
          }

          .excluded {
            background-color: #e8f5e8;
            color: #2e7d32;
            border: 2px solid #66bb6a;
          }

          .status-text {
            font-size: 18px;
            font-weight: bold;
          }

          .not-excluded .status-text {
            color: #d32f2f;
          }

          .excluded .status-text {
            color: #388e3c;
          }

          .button {
            display: inline-block;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            font-size: 16px;
            margin-top: 15px;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
          }

          .button-not-excluded {
            background-color: #f44336;
            color: white;
            border: 2px solid #d32f2f;
            padding: 16px 32px;
            font-size: 18px;
            box-shadow: 0 4px 8px rgba(244, 67, 54, 0.3);
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          .button-not-excluded:hover {
            background-color: #d32f2f;
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(244, 67, 54, 0.4);
          }

          .button-excluded {
            background-color: #9e9e9e;
            color: white;
            border: 1px solid #757575;
            padding: 8px 16px;
            font-size: 14px;
            opacity: 0.8;
          }

          .button-excluded:hover {
            background-color: #757575;
            opacity: 1;
          }

          .caution-text {
            font-size: 13px;
            color: #666;
            margin-top: 8px;
            font-style: italic;
          }

          .excluded .caution-text {
            color: #888;
          }

          .modal {
            display: block;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
          }

          .modal-content {
            background-color: #2d3748;
            margin: 15% auto;
            padding: 30px;
            border-radius: 8px;
            width: 80%;
            max-width: 400px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            color: #e2e8f0;
            border: 1px solid #4a5568;
          }

          .modal-buttons {
            margin-top: 20px;
          }

          .modal-btn {
            padding: 10px 20px;
            margin: 0 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
          }

          .modal-btn-confirm {
            background-color: #e53e3e;
            color: white;
            border: 1px solid #c53030;
          }

          .modal-btn-confirm:hover {
            background-color: #c53030;
            transform: translateY(-1px);
          }

          .modal-btn-cancel {
            background-color: #718096;
            color: white;
            border: 1px solid #4a5568;
          }

          .modal-btn-cancel:hover {
            background-color: #4a5568;
            transform: translateY(-1px);
          }

          .warning {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            color: #856404;
            padding: 8px;
            border-radius: 4px;
            margin: 10px 0;
            font-size: 14px;
          }

          .developer-note {
            background-color: #e3f2fd;
            border: 2px solid #2196f3;
            color: #1565c0;
            padding: 12px;
            border-radius: 6px;
            margin: 15px 0;
            text-align: center;
            font-weight: bold;
            font-size: 14px;
          }
        `,
        }}
      />

      <div
        style={{
          fontFamily: "Arial, sans-serif",
          maxWidth: "600px",
          margin: "20px auto",
          padding: "15px",
          lineHeight: "1.4",
        }}
      >
        <div className="developer-note">
          🔧 DEVELOPER/INTERNAL PAGE - This page is for site administrators and
          developers only
        </div>

        <h1>Plausible Analytics Exclusion</h1>
        <div>
          Click the button below to toggle your exclusion in analytics for this
          site.
        </div>

        <div className="warning">
          <strong>Developer Note:</strong> Exclude your visits to keep analytics
          data clean and focused on real visitors.
        </div>

        <div
          className={`status-container ${
            isExcluded ? "excluded" : "not-excluded"
          }`}
        >
          <div className="status-text">
            {isExcluded
              ? "✅ EXCLUDED - Your visits are being excluded from Plausible"
              : "❌ NOT EXCLUDED - Your visits are NOT being excluded from Plausible"}
          </div>
          <div className="caution-text">
            {isExcluded
              ? "✅ Your visits are excluded from analytics data. Click below only if you want to include your visits in the metrics."
              : "🚨 Your visits are being counted in analytics data! Click the button below to exclude your developer visits."}
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            onClick={toggleExclusion}
            className={`button ${
              isExcluded ? "button-excluded" : "button-not-excluded"
            }`}
          >
            {isExcluded
              ? "⚠️ Stop Excluding My Visits"
              : "🚨 EXCLUDE MY VISITS NOW"}
          </button>
        </div>

        {/* Confirmation Modal */}
        {showModal && (
          <div id="confirmModal" className="modal" onClick={handleModalClick}>
            <div className="modal-content">
              <h3>⚠️ Confirm Action</h3>
              <p>
                Are you sure you want to stop excluding your visits from
                analytics?
              </p>
              <p>
                <strong>
                  This means your developer visits will be included in the
                  visitor data.
                </strong>
              </p>
              <div className="modal-buttons">
                <button
                  className="modal-btn modal-btn-confirm"
                  onClick={confirmStopExclusion}
                >
                  Yes, Stop Excluding
                </button>
                <button
                  className="modal-btn modal-btn-cancel"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
