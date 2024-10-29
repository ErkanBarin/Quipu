// utils/CsvWriter.js
import fs from 'fs';
import path from 'path';
import { createObjectCsvWriter } from 'csv-writer';

export class CsvWriter {
  constructor() {
    this.writer = createObjectCsvWriter({
      path: path.join(path.resolve(), 'emails.csv'),
      header: [
        { id: 'email', title: 'Email' },
        { id: 'firstName', title: 'First Name' },
        { id: 'lastName', title: 'Last Name' }
      ],
      append: true
    });
  }

  async saveUser(user) {
    await this.writer.writeRecords([user]);
  }
}
