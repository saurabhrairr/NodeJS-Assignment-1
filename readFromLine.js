let rl=require('readline')
const rlinterface=rl.createInterface(process.stdin,process.stdout)
rlinterface.question("what is your name\n",(name)=>
{
       console.log(`hello ${name}`);
       rlinterface.close()

})

