import { Activity } from '../src/Activity';

jest.mock('../src/Config');

describe('Activity class', () => {

  let activity: Activity;

  beforeEach(() => {
    activity = new Activity();
  });

  it('getByRdoId - should get all Activity filter by RdoId', async () => {
    const result = await activity
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('auth123')
      .withCustomer('customer-id')
      .getByRdoId('14d8121463492256732d3dda');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('create - should create one new activity', async () => {
    const result = await activity
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('auth123')
      .withCustomer('abc321')
      .create(
        '14d8121463492256732d3dda',
        {
          "place": [
            "local 1",
            "local 1"
          ],
          "company_id": "2fbe45cc456493730699617",
          "description": "Lorem ipsum dolor sit amet..."
        }
      );

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('getById - should get activity filtered by rdoId and activityId', async () => {
    const result = await activity
      .withUrl('http://host.example/v1/rdo')
      .withCustomer('abc321')
      .getById('56732d3dda14d81214634922', '14d8121463492256732d3dda');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('update - should update one activity', async () => {
    const result = await activity
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('14d8121463492256732d3dda')
      .withCustomer('56732d3dda14d81214634922')
      .update(
        '14d8121463492256732d3dda',
        'd14d81492256732d3d21463a',
        {
          "place": [
            "local 1",
            "local 1"
          ],
          "company_id": "2fbe45cc456493730699617",
          "description": "Lorem ipsum dolor sit amet..."
        }
      );

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('delete - should delete one activity', async () => {
    const result = await activity
      .withUrl('http://host.example/v1/rdo')
      .withCustomer('abc321')
      .withAuthorization('14d8121463492256732d3dda')
      .delete('56732d3dda14d81214634922', '14d8121463492256732d3dda');

    expect(result).toBeDefined();
    expect('204').toBe(result.code);
  });
});
