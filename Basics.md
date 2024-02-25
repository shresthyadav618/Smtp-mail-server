mx record -> mail exchange records from dns servers

this tells us how to handle sending emails to that particular servers, response could be mailserver.com ( it means on this domain some mail serevr is running and this will handle the mails)

now a dns query is made on mailserver.com asking its A record ( acutally where are you present , whats your ip address ) . We need to get the public ip address of the server which is handling mailing (mailserver.com)

email -> outlook.com -> (ip address) [ dns (support@outlook.com) -> outlook.com -> dns(outlook.com) -> ip address 1.2.3.4 ] 

manu@gmail.com , gmail.com mx record is found , which which mail servers or smtp serevrs are present to handle this email. 

spf record ( hello@piyushgarg.dev ) -> piyushgarg.dev domain par spf record search hoga , skiff.com hass the permission to send the mails from this mail. To check for spamming from 3rd party applications this spf record is checked to identify that the mail is being sent from the authorized domain or person .
 
To make mailing more secure , mails are emebeeded with an  encrypted signature with the help of a private key which a particular domain or mail serever handle. The decryption is done with the help of public key which is asked from the receving mail server to the sender mail server , the sender mail serevre provides with the public dkim key to decrypot the signature and hance both ar ematched . 


dmarcs ( if the check has failed , either of spf or dkim records have failed) , in case the public key (dkim) decrypted signature doesnt match with encrypted signature with private key OR if the domain authorized to send the mail isnt the domain sending the mail (spf record fail) then do we need to send the mail or discard it. 


