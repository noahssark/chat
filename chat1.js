// add new chat documents
// setting a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats =ref.collection ('chats');
        // this.unsub;
    }

// const chatroom = new Chatroom('music', 'chats');
// console.log(chatroom)
    async addChat(message){
        // format a chat object
        const now = new Date();
        const chat = {
            message, 
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        //  save the chat documents
        const response = await this.chats.add(chat);
        return response;
    }
    getChats(callback){
                 this.unsub= this.chats
                 .where('room', '==' ,this.room)
                 .orderBy('created_at')
                 .onSnapshot(snapshot =>{
                     snapshot.docChanges().forEach(
                         change => {
                             if(change.type === 'added'){
                                //  update the ui
                                callback(change.doc.data())
        
                             }
                         });
                     
                 });
             }
             updateName(username){
                         this.username = username;
                         localStorage.setItem('username', username);
                     }
                     updateRoom(room){
                        this.room = room;
                        console.log('room updated');
                        if(this.unsub){
                        this.unsub();
                        }
 }}

// chatroom.addChat("hello every1")
//    .then(() => console.log("chat added"))
//    .catch( err  => console.log(err
//    ));
    //      
//     //     
//  setTimeout(() =>{
//     chatroom.updateRoom('music'); 
//     chatroom.updateName('noa');
//     chatroom.getChats((data)=>{
// console.log(data);
//     })
//     chatroom.addChat('eloooo');
//  }, 30000)        
