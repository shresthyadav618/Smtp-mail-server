const smtpServer = require('smtp-server').SMTPServer;


const server = new smtpServer({
   allowInsecureAuth : true,
   authOptional : true,
 onConnect(session,cb){
    // cb(new Error('when we throw an error we signify we cant accept this connection , hence rejected'));
    console.log('On connect , someone trying to connect and connection accepted!! ', session.id )
    cb(); //accepting the connection
 },

  onMailFrom(address,session,cb){
   //address kis se aa rha mail
   console.log('Received mail from ', address.address , session.id);
  },

  onRcptTo(address,session,cb){
   console.log('on rcpt to ', address.address , session.id);
  },

  onData(stream,session,cb){
   //stream represents stream of data
   stream.on('data',(data)=>{
      console.log('received data ',data.toString());
   })
   stream.on('end',cb); //this data is being sent and saved to the database. server is ready
  }

});

server.listen(25,()=>{
   console.log('listening on port 25');
})

