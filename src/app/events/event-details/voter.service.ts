import { Injectable } from "@angular/core";
import { ISession } from "../shared";

@Injectable()
export class VoterService {

  deleteVoter(sessions: ISession, voterName: string) {
    sessions.voters = sessions.voters.filter(voter => voter !== voterName);
  }

  addVoter(sessions: ISession, voterName: string) {
    sessions.voters.push(voterName);
  }

  userHasVoted(sessions: ISession, voterName: string) {
    return sessions.voters.some(voter => voter === voterName);
  }
}
