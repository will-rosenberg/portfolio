export default function Plausible() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "20px auto",
        padding: "15px",
        lineHeight: "1.4",
      }}
    >
      <div
        style={{
          backgroundColor: "#e3f2fd",
          border: "2px solid #2196f3",
          color: "#1565c0",
          padding: "12px",
          borderRadius: "6px",
          margin: "15px 0",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        🔧 DEVELOPER/INTERNAL PAGE - This page is for site administrators and
        developers only
      </div>

      <h1>Plausible Analytics Exclusion</h1>
      <div>
        Click the button below to toggle your exclusion in analytics for this
        site.
      </div>

      <div
        style={{
          backgroundColor: "#fff3cd",
          border: "1px solid #ffeaa7",
          color: "#856404",
          padding: "8px",
          borderRadius: "4px",
          margin: "10px 0",
          fontSize: "14px",
        }}
      >
        <strong>Developer Note:</strong> Exclude your visits to keep analytics
        data clean and focused on real visitors.
      </div>

      <div
        id="status-container"
        style={{
          padding: "12px",
          borderRadius: "8px",
          margin: "15px 0",
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        <div id="status_text" style={{ fontSize: "18px", fontWeight: "bold" }}>
          Loading...
        </div>
        <div
          id="caution_text"
          style={{
            fontSize: "13px",
            color: "#666",
            marginTop: "8px",
            fontStyle: "italic",
          }}
        ></div>
      </div>

      <div style={{ textAlign: "center" }}>
        <a
          id="plausible_button"
          href="javascript:toggleExclusion()"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            marginTop: "15px",
            transition: "all 0.3s ease",
          }}
        >
          Loading...
        </a>
      </div>

      {/* Confirmation Modal */}
      <div
        id="confirmModal"
        style={{
          display: "none",
          position: "fixed",
          zIndex: 1000,
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            margin: "15% auto",
            padding: "30px",
            borderRadius: "8px",
            width: "80%",
            maxWidth: "400px",
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h3>⚠️ Confirm Action</h3>
          <p>
            Are you sure you want to stop excluding your visits from analytics?
          </p>
          <p>
            <strong>
              This means your developer visits will be included in the visitor
              data.
            </strong>
          </p>
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={() => confirmStopExclusion()}
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
                backgroundColor: "#f44336",
                color: "white",
              }}
            >
              Yes, Stop Excluding
            </button>
            <button
              onClick={() => closeModal()}
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
                backgroundColor: "#9e9e9e",
                color: "white",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.addEventListener("load", function (e) {
            updateDisplay();
          });

          function updateDisplay() {
            var exclusionState = window.localStorage.plausible_ignore == "true";
            var statusContainer = document.getElementById("status-container");
            var statusText = document.getElementById("status_text");
            var cautionText = document.getElementById("caution_text");
            var button = document.getElementById("plausible_button");

            if (exclusionState) {
              // Excluded - Green styling with caution
              statusContainer.style.backgroundColor = '#e8f5e8';
              statusContainer.style.color = '#2e7d32';
              statusContainer.style.border = '2px solid #66bb6a';
              statusText.innerHTML = "✅ EXCLUDED - Your visits are being excluded from Plausible";
              statusText.style.color = '#388e3c';
              cautionText.innerHTML = "✅ Your visits are excluded from analytics data. Click below only if you want to include your visits in the metrics.";
              cautionText.style.color = '#888';
              button.style.backgroundColor = '#9e9e9e';
              button.style.color = 'white';
              button.style.border = '1px solid #757575';
              button.style.padding = '8px 16px';
              button.style.fontSize = '14px';
              button.style.opacity = '0.8';
              button.innerHTML = "⚠️ Stop Excluding My Visits";
            } else {
              // Not excluded - Red styling with urgency
              statusContainer.style.backgroundColor = '#ffebee';
              statusContainer.style.color = '#c62828';
              statusContainer.style.border = '2px solid #ef5350';
              statusText.innerHTML = "❌ NOT EXCLUDED - Your visits are NOT being excluded from Plausible";
              statusText.style.color = '#d32f2f';
              cautionText.innerHTML = "🚨 Your visits are being counted in analytics data! Click the button below to exclude your developer visits.";
              cautionText.style.color = '#666';
              button.style.backgroundColor = '#f44336';
              button.style.color = 'white';
              button.style.border = '2px solid #d32f2f';
              button.style.padding = '16px 32px';
              button.style.fontSize = '18px';
              button.style.boxShadow = '0 4px 8px rgba(244, 67, 54, 0.3)';
              button.style.animation = 'pulse 2s infinite';
              button.innerHTML = "🚨 EXCLUDE MY VISITS NOW";
            }
          }

          function toggleExclusion(e) {
            var exclusionState = window.localStorage.plausible_ignore == "true";

            if (exclusionState) {
              // Show confirmation modal for stopping exclusion
              document.getElementById("confirmModal").style.display = "block";
            } else {
              // Direct action for starting exclusion
              window.localStorage.plausible_ignore = "true";
              updateDisplay();
            }
          }

          function confirmStopExclusion() {
            delete window.localStorage.plausible_ignore;
            updateDisplay();
            closeModal();
          }

          function closeModal() {
            document.getElementById("confirmModal").style.display = "none";
          }

          // Close modal when clicking outside of it
          window.onclick = function (event) {
            var modal = document.getElementById("confirmModal");
            if (event.target == modal) {
              closeModal();
            }
          };
        `,
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          #plausible_button:hover {
            transform: translateY(-2px);
          }
          
          .button-not-excluded:hover {
            background-color: #d32f2f !important;
            box-shadow: 0 6px 12px rgba(244, 67, 54, 0.4) !important;
          }
          
          .button-excluded:hover {
            background-color: #757575 !important;
            opacity: 1 !important;
          }
        `,
        }}
      />
    </div>
  );
}
