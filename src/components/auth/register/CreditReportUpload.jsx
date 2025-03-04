import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TransunionLogo from '../../asset/transunion copy.svg';
import EquifaxLogo from '../../asset/equifax copy.svg';
import ExperianLogo from '../../asset/experian copy.svg';
import idFrontPlaceholder from '../../asset/id-front-placeholder.svg';
import idBackPlaceholder from '../../asset/id-back-placeholder.svg';

export function CreditReportUpload({ formData, handleInputChange }) {
  const [uploadedFiles, setUploadedFiles] = useState({
    experian: null,
    equifax: null,
    transunion: null,
    identification: null,
  });

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    setUploadedFiles(prev => ({
      ...prev,
      [type]: file,
    }));
    handleInputChange({
      target: {
        name: type,
        value: file,
      },
    });
  };

  return (
    <div className="w-full max-w-[1300px] px-4 py-6">
      <div className="mb-8 bg-[#04284F] px-24 py-10 text-white">
        <h2 className="mb-2 text-center text-5xl font-bold">
          Obtain current copy of Your Credit Reports
        </h2>
        <p className="text-center text-2xl">
          To help us with your personalized Credit Report review, please follow these simple steps:
        </p>
      </div>

      {/* Step 1 */}
      <div className="flex">
        <div className="flex items-start justify-center gap-4 pt-3">
          <div className="relative h-full">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#15549A] text-2xl font-bold text-white">
              1
            </div>
            <div className="absolute left-5 top-11 h-[calc(100%+2.75rem)] w-[2px] bg-[#15549A]"></div>
          </div>
        </div>
        <div className="mb-8 ml-6 w-full rounded-lg bg-[#F2F2F2] px-5 py-7 text-[#04284F]">
          <h3 className="text-2xl font-bold">Obtain Your Credit Reports</h3>
          <ul className="mt-4 space-y-3 text-lg">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Visit <span className="font-bold">www.AnnualCreditReport.com</span> to request your
                free credit reports from the three major credit bureaus: Equifax, Experian, and
                TransUnion.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Follow the instructions on the website to download your reports. If possible, obtain
                reports from all three bureaus for the most comprehensive assessment.
              </span>
            </li>
          </ul>
          <button className="ml-8 mt-7 rounded-lg bg-[#15549A] px-4 py-4 text-xl text-white">
            <Link to="https://www.annualcreditreport.com" target="_blank" rel="noopener noreferrer">
              www.AnnualCreditReport.com
            </Link>
          </button>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex">
        <div className="flex items-start justify-center gap-4 pt-16">
          <div className="relative h-full">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#15549A] text-2xl font-bold text-white">
              2
            </div>
            <div className="absolute left-5 top-11 h-[calc(100%-2.75rem)] w-[2px] bg-[#15549A]"></div>
          </div>
        </div>

        <div className="mb-8 ml-6">
          <div className="mb-8 rounded-lg bg-[#04284F] px-24 py-10 text-white">
            <h2 className="mb-2 text-center text-3xl font-bold">
              Upload Your Credit Reports and identification
            </h2>
            <p className="text-center text-2xl">
              Your credit Repair jurney Starts Todays - Upload Your Credit Report & ID to Begin
            </p>
          </div>
          <div className="w-full rounded-lg bg-[#F2F2F2] px-5 py-7 text-[#04284F]">
            <h3 className="text-2xl font-bold">Upload Your Credit Reports and Identification</h3>
            <p className="mt-4 text-lg">
              Your credit Report privacy Starts Today - Upload Your Credit Report & ID to Begin
            </p>

            {/* Upload boxes */}
            <div className="mt-6 space-y-4">
              {/* Experian Upload */}
              <div className="flex w-full items-center rounded-lg bg-white p-3 shadow-sm">
                <div className="flex w-24 items-center">
                  <span className="font-semibold text-[#04284F]">Upload</span>
                  <img src={ExperianLogo} alt="Experian" className="ml-2 h-6" />
                </div>
                <div className="ml-4 flex-1">
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={e => handleFileUpload(e, 'experian')}
                    className="hidden"
                    id="experian-upload"
                  />
                  <label htmlFor="experian-upload" className="flex cursor-pointer items-center">
                    <span className="flex items-center rounded border border-gray-300 bg-[#F5F5F5] px-4 py-2">
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      Browse
                    </span>
                    <span className="ml-3 text-gray-500">
                      {uploadedFiles.experian ? uploadedFiles.experian.name : 'File name....'}
                    </span>
                  </label>
                </div>
              </div>

              {/* Equifax Upload */}
              <div className="flex w-full items-center rounded-lg bg-white p-3 shadow-sm">
                <div className="flex w-24 items-center">
                  <span className="font-semibold text-[#04284F]">Upload</span>
                  <img src={EquifaxLogo} alt="Equifax" className="ml-2 h-6" />
                </div>
                <div className="ml-4 flex-1">
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={e => handleFileUpload(e, 'equifax')}
                    className="hidden"
                    id="equifax-upload"
                  />
                  <label htmlFor="equifax-upload" className="flex cursor-pointer items-center">
                    <span className="flex items-center rounded border border-gray-300 bg-[#F5F5F5] px-4 py-2">
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      Browse
                    </span>
                    <span className="ml-3 text-gray-500">
                      {uploadedFiles.equifax ? uploadedFiles.equifax.name : 'File name....'}
                    </span>
                  </label>
                </div>
              </div>

              {/* TransUnion Upload */}
              <div className="flex w-full items-center rounded-lg bg-white p-3 shadow-sm">
                <div className="flex w-24 items-center">
                  <span className="font-semibold text-[#04284F]">Upload</span>
                  <img src={TransunionLogo} alt="TransUnion" className="ml-2 h-6" />
                </div>
                <div className="ml-4 flex-1">
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={e => handleFileUpload(e, 'transunion')}
                    className="hidden"
                    id="transunion-upload"
                  />
                  <label htmlFor="transunion-upload" className="flex cursor-pointer items-center">
                    <span className="flex items-center rounded border border-gray-300 bg-[#F5F5F5] px-4 py-2">
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      Browse
                    </span>
                    <span className="ml-3 text-gray-500">
                      {uploadedFiles.transunion ? uploadedFiles.transunion.name : 'File name....'}
                    </span>
                  </label>
                </div>
              </div>
              {/* ID Upload */}
              <div className="mt-8 rounded-lg bg-white p-6">
                <h4 className="mb-4 text-xl font-semibold text-[#04284F]">
                  Upload your driving license for your identity
                </h4>
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Front Side Upload */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#04284F]">Upload Front Side</span>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={e => handleFileUpload(e, 'identificationFront')}
                        className="hidden"
                        id="id-front-upload"
                      />
                      <label
                        htmlFor="id-front-upload"
                        className="flex cursor-pointer items-center rounded border border-gray-300 bg-[#F5F5F5] px-4 py-2"
                      >
                        Browse
                      </label>
                    </div>
                    <div className="relative h-40 w-full overflow-hidden rounded-lg border-2 border-dashed border-[#15549A] bg-gray-50">
                      {uploadedFiles.identificationFront ? (
                        <img
                          src={URL.createObjectURL(uploadedFiles.identificationFront)}
                          alt="ID Front Preview"
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <img
                            src={idFrontPlaceholder}
                            alt="ID Front Sample"
                            className="h-32 w-auto opacity-50"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Back Side Upload */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#04284F]">Upload Back Side</span>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={e => handleFileUpload(e, 'identificationBack')}
                        className="hidden"
                        id="id-back-upload"
                      />
                      <label
                        htmlFor="id-back-upload"
                        className="flex cursor-pointer items-center rounded border border-gray-300 bg-[#F5F5F5] px-4 py-2"
                      >
                        Browse
                      </label>
                    </div>
                    <div className="relative h-40 w-full overflow-hidden rounded-lg border-2 border-dashed border-[#15549A] bg-gray-50">
                      {uploadedFiles.identificationBack ? (
                        <img
                          src={URL.createObjectURL(uploadedFiles.identificationBack)}
                          alt="ID Back Preview"
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <img src={idBackPlaceholder} alt="ID Back Sample" className="" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Step 3 - Consent */}
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#15549A] text-2xl font-bold text-white">
            3
          </div>
          <h3 className="text-xl font-bold text-[#04284F]">CONSENT & LIMITED POWER OF ATTORNEY</h3>
        </div>
        <div className="ml-16 mt-4">
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              name="consentAgreement"
              checked={formData.consentAgreement}
              onChange={handleInputChange}
              className="mt-1 h-6 w-6 rounded border-2 border-[#15549A]"
            />
            <label className="text-[#04284F]">
              By checking this box on our application form, I certify that I am at least 19 years of
              age and agree to the terms of this agreement.
            </label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 text-center">
        <button
          type="submit"
          className="w-full max-w-md rounded-lg bg-[#46CC02] px-8 py-4 text-xl font-bold text-white hover:bg-[#3BAD00] md:w-auto"
        >
          SUBMIT & UPLOAD YOUR DOCUMENTS
        </button>
        <p className="mt-4 text-sm text-[#04284F]">
          Click the Upload Button to securely submit your credit reports and verification details.
          <br />
          Ensure the files are clear and complete for easy processing.
        </p>
      </div>
    </div>
  );
}

CreditReportUpload.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
