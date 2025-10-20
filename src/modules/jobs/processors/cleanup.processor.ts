import { Injectable } from '@nestjs/common';
import { Job } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class CleanupProcessor {
  constructor(@InjectQueue('cleanup') private cleanupQueue: Queue) {}

  async handleCleanup(job: Job) {
    // Logic for cleaning up completed jobs
    console.log(`Cleaning up job with ID: ${job.id}`);
    // Implement your cleanup logic here
  }
}