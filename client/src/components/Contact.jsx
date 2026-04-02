import React from 'react';
import { Terminal } from 'lucide-react';
import '../index.css';

export default function Contact() {
  const [logIndex, setLogIndex] = React.useState(0);
  const [txStatus, setTxStatus] = React.useState("READY FOR UPLINK");
  const [isSending, setIsSending] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex(prev => (prev >= 6 ? 0 : prev + 1));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const handleTransmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setTxStatus("TRANSMITTING PAYLOAD...");

    const formData = new FormData(event.target);

    // ========================================================
    // TODO: PASTE YOUR WEB3FORMS ACCESS KEY DIRECTLY BELOW 👇
    // ========================================================
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setTxStatus("UPLINK SUCCESSFUL // MAIL DELIVERED");
        event.target.reset();
      } else {
        console.error("Transmission Error:", data);
        setTxStatus("ERROR: UPLINK FAILED");
      }
    } catch (error) {
       console.error("Network Error:", error);
       setTxStatus("ERROR: NETWORK UNREACHABLE");
    } finally {
       setIsSending(false);
       setTimeout(() => setTxStatus("READY FOR UPLINK"), 5000);
    }
  };

  return (
    <section id="contact" className="contact-container">
      
      {/* Top Header */}
      <div className="contact-header">
        <div className="section-subtitle-container">
          <span className="subtitle-dot" />
          <span className="section-subtitle">SYSTEM_PROTOCOL: ESTABLISHED</span>
        </div>
        <h2 className="section-title">
          CONTACT_<br/>
          ME
        </h2>
        <div className="contact-intro-row">
          <p className="contact-desc">
            Initiating secure transmission channel. Enter payload parameters below or utilize stored authentication keys for direct access.
          </p>
          <div className="contact-coords">
            LAT: 40.7128 N<br/>
            LON: 74.0060 W<br/>
            UTC: 11:07:15
          </div>
        </div>
      </div>

      {/* Main Content Row */}
      <div className="contact-main">
        
        {/* Left: Form */}
        <div className="transmission-box">
          <div className="box-header">
            <div className="box-title">
              <Terminal size={16} className="purple-text" />
              &nbsp;&nbsp;SEND_MESSAGE
            </div>
            <div className="box-controls">
              <div className="control-dot" />
              <div className="control-dot cyan" />
            </div>
          </div>
          
          <form className="transmission-form" onSubmit={handleTransmit}>
            <div className="form-row">
              <div className="input-group">
                <label>01_NAME</label>
                <div className="input-field">
                  <span className="prompt">&gt;</span>
                  <input type="text" name="name" required placeholder="name_string" />
                </div>
              </div>
              <div className="input-group">
                <label>02_EMAIL</label>
                <div className="input-field">
                  <span className="prompt">&gt;</span>
                  <input type="email" name="email" required placeholder="email_address" />
                </div>
              </div>
            </div>

            <div className="input-group full">
              <label>03_MESSAGE</label>
              <div className="input-field textarea">
                <span className="prompt">&gt;</span>
                <textarea name="message" required placeholder="message_body_content..." rows={6} />
              </div>
            </div>

            <div className="form-footer">
              <div className="status-indicator">
                <div className={`indicator-light ${isSending ? 'pulse' : ''}`} style={isSending ? { backgroundColor: 'var(--purple-light)', boxShadow: '0 0 10px var(--purple-light)' } : {}} />
                <span style={{ color: isSending ? 'var(--purple-light)' : txStatus.includes('SUCCESS') ? '#00ff66' : txStatus.includes('ERROR') ? '#ff3333' : 'inherit' }}>
                  {txStatus}
                </span>
              </div>
              <button type="submit" className="btn-execute" disabled={isSending} style={{ opacity: isSending ? 0.5 : 1 }}>
                {isSending ? 'PROCESSING...' : 'EXECUTE_SEND'}
              </button>
            </div>
          </form>
        </div>

        {/* Right: Connect Network Links & Console */}
        <div className="vault-sidebar">
          
          <div className="vault-section">
            <h3 className="vault-title" style={{ marginBottom: '24px' }}>
              <Terminal size={16} className="cyan-text" />
              &nbsp;&nbsp;SOCIAL_NETWORK_LINKS
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="https://github.com/sourav-jyoti" target="_blank" rel="noreferrer" className="vault-card cyan-border" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div className="card-top" style={{ marginBottom: 0 }}>
                  <div className="card-icon-box" style={{ background: 'rgba(0, 255, 255, 0.1)', color: 'var(--cyan)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                  </div>
                  <div className="card-info">
                    <div className="key-name">GITHUB</div>
                    <div className="key-status">git.conn.established</div>
                  </div>
                  <div className="card-action" style={{ fontSize: '18px', color: 'var(--cyan)' }}>»</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/sourav-jyoti" target="_blank" rel="noreferrer" className="vault-card purple-border" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div className="card-top" style={{ marginBottom: 0 }}>
                  <div className="card-icon-box" style={{ background: 'rgba(157, 78, 221, 0.1)', color: 'var(--purple-light)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                  <div className="card-info">
                    <div className="key-name">LINKEDIN</div>
                    <div className="key-status">professional.net</div>
                  </div>
                  <div className="card-action" style={{ fontSize: '18px', color: 'var(--purple-light)' }}>»</div>
                </div>
              </a>

            </div>
          </div>

          <div className="console-box" style={{ marginTop: '20px' }}>
            <div className="console-header">
              <span>SYSTEM_LOG</span>
              <div className="console-dot" />
            </div>
            <div className="console-lines" style={{ minHeight: '110px' }}>
              {logIndex >= 1 && <div className="c-line"><span className="c-ts">[14:02:11]</span> PORT_8080 <span className="c-status">OPEN</span></div>}
              {logIndex >= 2 && <div className="c-line"><span className="c-ts">[14:02:14]</span> SOCKET_CONN <span className="c-status">OK</span></div>}
              {logIndex >= 3 && <div className="c-line"><span className="c-ts">[14:02:18]</span> GITHUB_API <span className="c-status">LINKED</span></div>}
              {logIndex >= 4 && <div className="c-line faint"><span className="c-ts">[14:02:22]</span> AWAITING_PING... <span className="c-status" style={{ animation: 'blink 1s step-end infinite' }}>_</span></div>}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
