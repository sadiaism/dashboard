export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-06'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skvKYrfL4qHhUQ9EheesiIdj2rZoZwoMZhmWc7OrUghFOpMHzjqcqoHQoRtJWEGaHKGZbVsGwfUlTVaGLbxAMpCxqXKCIzYMnEANPZKbtE1GQRXoSBll7ngPfxN3PYEPbNyHJveSuiZUmDkFFZ5cAqZ1zq9D8VdmiuYRPHZZChoO4795tLGC",
  'Missing environment variable: NEXT_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
