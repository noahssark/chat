class ChatUI{
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = ''; 
    }
    render(data){
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            {addSuffix: true}
        );
        const html =`
        <li class="list-group-item">
        <Span class="username">${data.username}</Span>
        <Span class="message">${data.message}</Span>
        <Div class="time">${when}</Div>
    </li>`;
    // data.created_at.toDate()

      this.list.innerHTML += html;
    }
}