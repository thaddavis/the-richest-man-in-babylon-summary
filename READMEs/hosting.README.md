# STEP 1

Throw static files into S3 bucket

# STEP 2

Bought `the-richest-man-in-babylon-summary.com` $12.99

# STEP 3

AWS Certificate Manager - FREE!!!

request certificate for the following FQDN's:

- the-richest-man-in-babylon-summary.com
- www.the-richest-man-in-babylon-summary.com

ADD TO Route53

# STEP 4

Create 2 S3 Buckets with same name as FQDN's

the-richest-man-in-babylon-summary.com
www.the-richest-man-in-babylon-summary.com

# STEP 5 - Remembered that S3 buckets don't support https

Created Cloudfront distribution

\*\*\* Tip

make sure you put

```
Default root object
index.html
```
