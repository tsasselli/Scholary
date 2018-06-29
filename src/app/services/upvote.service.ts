import { Links } from './../models/links';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class UpvoteService {

  constructor(private afs: AngularFirestore) { }

  gitItemVotes(itemId) {
    return this.afs.collection(`upvotes/${itemId}`)
  }

  updateUserVote(itemId, userId,vote): void {
    const voteDocRef = this.afs.firestore.collection('links').doc(`${itemId}`);
    
    this.afs.firestore.runTransaction(transaction => 
    transaction.get(voteDocRef).then(voteDoc => {
      if(!voteDoc.exists) {
        throw "document doesnt exsist";
      }

      const newVote = voteDoc.data();
    }))
    this.afs.collection(`upvotes`).doc(`${itemId}`);
  }
}
