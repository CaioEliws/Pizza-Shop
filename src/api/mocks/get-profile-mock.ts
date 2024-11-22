import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Joel Dom',
      email: 'joeldom@gmail.com',
      phone: '1919929492',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
