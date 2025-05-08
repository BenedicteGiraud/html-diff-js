export const originalHTML = `<div>
    <p>Hi Alex,</p>

    <p>I hope you're doing well. I wanted to follow up on the Q2 marketing report. Are you available this Thursday for a
        quick sync to review the draft?</p>

    <p>Here's a quick summary of the key metrics from the report:</p>

    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; margin-top: 10px;">
        <thead>
            <tr>
                <th style="background-color: #f2f2f2;">Metric</th>
                <th style="background-color: #f2f2f2;">Q2 Actual</th>
                <th style="background-color: #f2f2f2;">Target</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Revenue</td>
                <td>$1,250,000</td>
                <td>$1,200,000</td>
            </tr>
            <tr>
                <td>Leads Generated</td>
                <td>2,500</td>
                <td>2,000</td>
            </tr>
            <tr>
                <td>Conversion Rate</td>
                <td>4.5%</td>
                <td>4.0%</td>
            </tr>
        </tbody>
    </table>

    <p>Let me know what time works best for you.</p>

    <p>Best regards,</p>
    <p>Morgan</p>
</div>`;

export const newHTML = `<div>
    <p>Hi Alex,</p>

    <p>Hope you're having a great week! I wanted to check in regarding the Q2 marketing report. Would you be available
        on Thursday to go over the current draft together?</p>

    <p>Here's a summary of the key performance metrics from Q2:</p>

    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; margin-top: 10px;">
        <thead>
            <tr>
                <th style="background-color: #f2f2f2;">Metric</th>
                <th style="background-color: #f2f2f2;">Actual</th>
                <th style="background-color: #f2f2f2;">Q2 Target</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Revenue</td>
                <td>$2,260,500</td>
                <td>$1,200,000</td>
            </tr>
            <tr>
                <td>Leads Generated</td>
                <td>2,500</td>
                <td>3,000</td>
            </tr>
            <tr>
                <td>Conversion Rate</td>
                <td>4.5%</td>
                <td>4.0%</td>
            </tr>
        </tbody>
    </table>

    <p>I've attached the latest version for your review. Let me know a time that works for you.</p>

    <p>Thanks so much!</p>
    <p>Best,</p>
    <p>Morgan</p>
</div>`;

export const diffHTML = `<div>
    <p>Hi Alex,</p>

    <p><del>I hope</del><ins>Hope</ins> you're <del>doing well.</del><ins>having a great week!</ins> I wanted to <del>follow up on</del><ins>check in regarding</ins> the Q2 marketing report. <del>Are</del><ins>Would</ins> you <ins>be </ins>available<del> this</del><ins>
        on</ins> Thursday <del>for a
        quick sync </del>to <del>review</del><ins>go over</ins> the <ins>current </ins>draft<ins> together</ins>?</p>

    <p>Here's a <del>quick </del>summary of the key <ins>performance </ins>metrics from <del>the report</del><ins>Q2</ins>:</p>

    <table>
        <thead>
            <tr>
                <th>Metric</th>
                <th><del>Q2 </del>Actual</th>
                <th><ins>Q2 </ins>Target</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Revenue</td>
                <td><del>$1,250,000</del><ins>$2,260,500</ins></td>
                <td>$1,200,000</td>
            </tr>
            <tr>
                <td>Leads Generated</td>
                <td>2,500</td>
                <td><del>2</del><ins>3</ins>,000</td>
            </tr>
            <tr>
                <td>Conversion Rate</td>
                <td>4.5%</td>
                <td>4.0%</td>
            </tr>
        </tbody>
    </table>

    <p><ins>I've attached the latest version for your review. </ins>Let me know <del>what</del><ins>a</ins> time <ins>that </ins>works<del> best</del> for you.</p>

    <p><ins>Thanks so much!</ins></p><ins>
    </ins><p>Best<del> regards</del>,</p>
    <p>Morgan</p>
</div>`;
