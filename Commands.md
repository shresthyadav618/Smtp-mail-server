Each SMTP command defines a particular function within the SMTP session, which consists of three steps: 

handshake – establishing a TCP connection 
email transfer – manipulations with the email
termination – closing a TCP connection
Therefore, we decided to list the SMTP commands according to this flow.

Commands are : ->

1. HELO -> initiates a smtp session connection , the command is as follows : HELO domain_name or HELO ip_address

HELO client.net or HELO 23.32.12.4

2. after connection establishment to the server we can use MAILFROM , MAIL FROM test@client.net

3. RCPT TO specifies the address of the receiver whether it is a valid address or not , if it is then the mail can be sent to RCPT TO from MAIL FROM 

4. DATA is then received , the to , subject , body etc all 

5. QUIT

These are all the commands of the smtp mail sending 


