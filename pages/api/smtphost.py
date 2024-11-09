import dns.resolver

def get_smtp_host(email):
    # Extract the domain from the email address
    domain = email.split('@')[1]
    
    # Query MX records for the domain
    try:
        answers = dns.resolver.resolve(domain, 'MX')
        
        # Get the mail server with the lowest priority
        mail_server = sorted(answers, key=lambda x: x.preference)[0].exchange.to_text()
        print(f"MX record for {domain}: {mail_server}")
        
        # Based on the MX record, you can determine the SMTP server (often similar or same)
        # For example:
        if "google" in mail_server:
            smtp_host = "smtp.gmail.com"
        elif "outlook" in mail_server:
            smtp_host = "smtp.office365.com"
        else:
            smtp_host = mail_server  # Default to MX host as SMTP host
        
        return smtp_host
    
    except dns.resolver.NoAnswer:
        print(f"No MX record found for {domain}")
        return None

# Test with your email address
email = "info@alhabibtravel.co.uk"
smtp_host = get_smtp_host(email)
print(f"SMTP host for {email}: {smtp_host}")