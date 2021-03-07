import { of } from 'rxjs';
import { ISession } from '../shared';
import { VoterService } from './voter.service';

describe('VoterService', () => {
  let voterService: VoterService,
    mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('http', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove voter from the session list of voters', () => {
      const session = {id: 3, voters: ['john', 'joe']};
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(6, session as ISession, 'john');
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('joe');
    });

    it('should call http.delete with right url', () => {
      const session = {id: 3, voters: ['john', 'joe']};
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(6, session as ISession, 'john');
      expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/6/sessions/3/voters/john');
    });
  });

  describe('addVoter', () => {
    it('should call http.delete with right url', () => {
      const session = {id: 3, voters: ['john']};
      mockHttp.post.and.returnValue(of(false));

      voterService.addVoter(6, session as ISession, 'joe');
      expect(mockHttp.post).toHaveBeenCalledWith('/api/events/6/sessions/3/voters/joe', {}, jasmine.any(Object));
    });
  });
});
